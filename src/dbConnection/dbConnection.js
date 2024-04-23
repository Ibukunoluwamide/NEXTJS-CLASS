import mongoose from "mongoose";
require('dotenv').config()

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

export default dbConnection;
