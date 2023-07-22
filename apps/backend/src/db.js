// db.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/storecomm'; // Replace with your MongoDB connection URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true, // Use this option separately
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;

