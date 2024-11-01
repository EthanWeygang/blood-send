const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    donor: {
        type: Boolean,
        required: true,
    },
    location: {
        type: {
            type: String,  // GeoJSON type
            enum: ["Point"], // Specify it's a Point
            required: true,
        },
        coordinates: {
            type: [Number], // Array of numbers for [longitude, latitude]
            required: true,
        },
    },
    bloodtype: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
