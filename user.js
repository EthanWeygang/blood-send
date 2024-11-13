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
            enum: ["Point"], // Specify its type is a point
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
    password: {
        type: String,
        required: true,
        unique: false,
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

userSchema.index({ location: '2dsphere' });

module.exports = mongoose.model("User", userSchema);
