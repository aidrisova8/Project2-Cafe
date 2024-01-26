const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderdetailsSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    phone: {
        type: Number,
        required: true, 
       
    },
    addressline: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    city: {
        type: String,
        required: true, 
    },
    state: {
        type: String,
        required: true, 
    },
    zipcode: {
        type: Number,
        required: true, 
    },
    card: {
        type: Number,
        required: true, 
    },
    expdate: {
        type: Date,
        required: true, 
    },
}, { timestamps: true })

const Orderdetails = mongoose.model('orderdetails', orderdetailsSchema)

module.exports = Orderdetails