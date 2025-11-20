require('dotenv').config();  // <--- THIS LINE IS CRITICAL

console.log("MongoDB URL from .env:", process.env.database_url);  // Check if it's undefined

const mongoose = require("mongoose");
const AppError = require("./utils/appError");

mongoose.connect(process.env.database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Optional: stop the app if DB fails
});
