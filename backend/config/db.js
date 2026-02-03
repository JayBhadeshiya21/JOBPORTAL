const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // In modern Mongoose, you only need the URL string.
        // All those 'use' options are now default or deprecated.
        const conn = await mongoose.connect(process.env.MONGO_URL);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;