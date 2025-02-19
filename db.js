const mongoose = require("mongoose")
require("dotenv").config()  // Import and configure dotenv

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect(process.env.MONGO_URI)  // Use the environment variable
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
