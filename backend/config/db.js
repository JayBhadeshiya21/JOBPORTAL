const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URl, {});
        console.log("MongoDB connected");
    }
    catch (err) {
        console.log("Error connecting to Mongo ",err);
        process.emit(1);
    };
}

module.exports = connectDB;