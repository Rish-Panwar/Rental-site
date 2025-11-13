import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    console.log("Incoming Authorization:", req.headers.authorization);

    // Check if Authorization header exists and starts with "Bearer"
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
      console.log("Extracted token:", token);
    }

    // No token provided
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token provided",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);

    // If decoded is a string (old tokens), wrap it in an object
    const userId = typeof decoded === "string" ? decoded : decoded.id;

    // Find user and attach to request
    req.user = await User.findById(userId).select("-password");

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not found, invalid token",
      });
    }

    // Proceed to next middleware
    next();
  } catch (error) {
    console.error("Auth Error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed or expired",
    });
  }
};
