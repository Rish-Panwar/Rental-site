import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Car from "../models/Car.js";

// Generate JWT Token with proper payload and expiry
const generateToken = (userId) => {
  const payload = { id: userId };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password || password.length < 8) {
      return res.json({
        success: false,
        message: "Please fill all fields correctly (password must be at least 8 characters).",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    // Generate token
    const token = generateToken(user._id.toString());

    res.json({ success: true, token });
  } catch (error) {
    console.error("Register error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user._id.toString());

    res.json({ success: true, token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get user data using token
export const getUserData = async (req, res) => {
  try {
    const { user } = req;
    res.json({ success: true, user });
  } catch (error) {
    console.error("getUserData error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get all available cars
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({ isAvailable: true });
    res.json({ success: true, cars });
  } catch (error) {
    console.error("getCars error:", error.message);
    res.json({ success: false, message: error.message });
  }
};
