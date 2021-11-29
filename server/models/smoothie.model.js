
const mongoose = require('mongoose')

const SmoothieSchema = new mongoose.Schema({
            productId: Number,
            name: String,
            image: String,
            description: String,
            price:Number,
            calories: Number,
            totalFat: Number,
            totalCarb: Number,
            protein: Number
            
        

}, { timestamps: true })




const Smoothie = mongoose.model('Smoothie', SmoothieSchema)
module.exports = Smoothie