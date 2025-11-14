import mongoose from "mongoose";
import "dotenv/config";
import Car from "./models/Car.js";

const img = (file) => `${process.env.CLIENT_URL}/assets/${file}`;

const cars = [
  {
    brand: "Mercedes",
    model: "AMG GT",
    year: 2022,
    category: "Sports",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 350,
    location: "New York",
    description: "Powerful AMG GT with incredible performance.",
    isAvailable: true,
    image: img("amg-1.jpg"),
  },
  {
    brand: "Mercedes",
    model: "AMG GT Black",
    year: 2023,
    category: "Sports",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 450,
    location: "Miami",
    description: "Top-tier AMG GT in black edition.",
    isAvailable: true,
    image: img("amg-2.jpg"),
  },
  {
    brand: "Mercedes",
    model: "AMG Roadster",
    year: 2023,
    category: "Convertible",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 420,
    location: "Los Angeles",
    description: "AMG Roadster with open-top experience.",
    isAvailable: true,
    image: img("amg-3.jpg"),
  },
  {
    brand: "Audi",
    model: "R8",
    year: 2021,
    category: "Supercar",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 500,
    location: "Los Angeles",
    description: "Audi R8 V10 — a true supercar icon.",
    isAvailable: true,
    image: img("audi-r8.jpg"),
  },
  {
    brand: "Audi",
    model: "R8 Spyder",
    year: 2022,
    category: "Convertible",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 530,
    location: "Miami",
    description: "Audi R8 Spyder with convertible power.",
    isAvailable: true,
    image: img("audi-r8-2.jpg"),
  },
  {
    brand: "BMW",
    model: "M3",
    year: 2022,
    category: "Sedan",
    seating_capacity: 5,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 260,
    location: "Houston",
    description: "BMW M3 performance sedan.",
    isAvailable: true,
    image: img("bmw-1.jpg"),
  },
  {
    brand: "BMW",
    model: "M4",
    year: 2023,
    category: "Coupe",
    seating_capacity: 4,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 300,
    location: "Chicago",
    description: "BMW M4 high-performance coupe.",
    isAvailable: true,
    image: img("bmw-2.jpg"),
  },
  {
    brand: "BMW",
    model: "i8",
    year: 2020,
    category: "Hybrid",
    seating_capacity: 2,
    fuel_type: "Hybrid",
    transmission: "Automatic",
    pricePerDay: 280,
    location: "San Francisco",
    description: "BMW i8 futuristic hybrid supercar.",
    isAvailable: true,
    image: img("bmw-3.jpg"),
  },
  {
    brand: "Bugatti",
    model: "Chiron",
    year: 2021,
    category: "Hypercar",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 2000,
    location: "Los Angeles",
    description: "Bugatti Chiron — unmatched speed and luxury.",
    isAvailable: true,
    image: img("bugatti-1.jpg"),
  },
  {
    brand: "Bugatti",
    model: "Chiron Sport",
    year: 2022,
    category: "Hypercar",
    seating_capacity: 2,
    fuel_type: "Petrol",
    transmission: "Automatic",
    pricePerDay: 2300,
    location: "Dubai",
    description: "Bugatti Chiron Sport edition.",
    isAvailable: true,
    image: img("bugatti-2.jpg"),
  },

];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");

    await Car.deleteMany();
    console.log("Old cars removed");

    await Car.insertMany(cars);
    console.log("New cars inserted successfully!");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
