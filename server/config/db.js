const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://21057cm036_db_user:oxAsA4it1Z4cupIp@cluster0.fcuktey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected ✔");
  } catch (error) {
    console.log("DB connection failed ❌", error);
    
  }
};

module.exports = connectDB;