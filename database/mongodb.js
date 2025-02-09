import mongoose from "mongoose";
import {DB_URI,NODE_ENV} from "../config/env.js";

if(!DB_URI){
    throw new Error("Please provide a valid MONGODB_URI environment variable inside .env.<develepment/production>.local");
}

const connectDB=async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
    }
    catch(err){
        console.error("Error connecting database:",err);
        process.exit(1);
    }
}

export default connectDB;