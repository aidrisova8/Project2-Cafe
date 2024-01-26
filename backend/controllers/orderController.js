const Orderdetails = require('../models/Orderdetails')
 const User=require('../models/User')

module.exports.create=async(req,res)=>{
    console.log("order")
    try {
        const order = await Orderdetails.create(req.body)
 
        await User.findByIdAndUpdate(req.params.userId, {
             
            $push: {
              
                orderdetails: order._id
            }
        
        }) 
        res.send(order) 
    } catch (err) {
        res.send("Order failed") 
        console.log(err.message) 
    }
}