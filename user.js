const { isEmptyObject } = require("jquery")
const mongoose = require("mongoose")

const Schema = mongoose.Schema
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
        type: string,
        enum: ["Point"],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true
    },
    bloodtype: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Date,
        required: true
    },


})
