const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderdetailsSchema = new Schema({
    firstname: {
        type: String,
       
    },
    lastname: {
        type: String,
     
    },
      email: {
        type: String,
        required: true, 
        unique: true
    },
    phone: {
        type: Number,
       
       
    },
    address: {
        type: String,
        
    }, 
    city: {
        type: String,
       
    },
    state: {
        type: String,
       
    },
    zip: {
        type: Number,
      
    },
    card: {
        type: Number,
       
    },
    cardDate: {
        type: String,
      
    }
}, { timestamps: true })

const Orderdetails = mongoose.model('orderdetails', orderdetailsSchema)

module.exports = Orderdetails