const mongoose = require('mongoose')

const ShoppingCartSchema = new mongoose.Schema({
    productId: Number,
    name: String,
    image: String,
    price:Number,
    totalPrice: Number,
    quantity: Number
},{timestamps: true});

const Cart = mongoose.model('Cart', ShoppingCartSchema);
module.exports = Cart;