const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🔥 MongoDB Connected");
  } catch (error) {
    console.error("❌ Mongo Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;