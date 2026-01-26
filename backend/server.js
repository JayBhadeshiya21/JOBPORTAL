require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path")
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type","Authorization"]
    })
);


// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Serve upload folder
app.use("/uploads", express.static(path.join(__dirname,"uploads"), {}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(1`Server running on port ${PORT}`);
});