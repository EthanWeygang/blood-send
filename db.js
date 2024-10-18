const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect("mongodb+srv://ethanweygang:Playroom1@bloodsend.1o7ah.mongodb.net/bloodsend")
        console.log(`Database connected: ${conn.connection.host}`)

    } catch (error){
        console.log(error)
    }
}

module.exports = connectDB