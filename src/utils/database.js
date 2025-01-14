const mongoose = require("mongoose");
const { PostModel } = require("../models/PostModel");

// Function to connect to the DB
async function dbConnect(){
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27018/${process.env.npm_package_name}`;
    await mongoose.connect(databaseUrl);
    console.log("Database connected.");
}

module.exports = {
    dbConnect
};