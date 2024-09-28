import mongoose from "mongoose";
import env from "dotenv";
env.config();
const URI = process.env.MONGODB_URI;

const connectDB=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Database Connected");
    } catch (error) {
      console.error("conection failed");
      process.exit(0);   
    }
}

export default connectDB;
