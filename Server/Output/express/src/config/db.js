import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}