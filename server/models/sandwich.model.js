
const mongoose = require('mongoose')

const SandwichSchema = new mongoose.Schema({
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




const Sandwich = mongoose.model('Sandwich', SandwichSchema)
module.exports = Sandwich