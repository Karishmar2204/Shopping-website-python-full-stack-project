const mongoose = require ('mongoose');

const OrderSchema = new mongoose.Schema({
    CartItems:Array,
    amount:String,
    Status:String,
    createdAt:Date
 })

 const OrderModel = mongoose.model('Order',OrderSchema);

 module.exports =OrderModel;