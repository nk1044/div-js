import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL);
        console.log(`MongoDb connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error while connecting to database:- ${error.message}`);
    }
};

export default connectDb;