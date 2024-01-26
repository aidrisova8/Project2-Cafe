const mongoose = require('mongoose')

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
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    orderdetails:[{
        type: mongoose.Types.ObjectId,
        ref: 'orderdetails'
     }]
},{ timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User