import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const createAdmin = async () => {
  try {
    const exists = await User.findOne({ email: "admin@example.com" });
    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    // Use new User() + save()
    const admin = new User({
      username: "Admin",
      email: "admin@example.com",
      password: "password123",
    });

    await admin.save(); // ← this avoids 'next is not a function'
    console.log("Admin created successfully:", admin);
    process.exit();
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
};

createAdmin();
