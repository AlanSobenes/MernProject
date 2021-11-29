const mongoose = require('mongoose')

const BreakfastSandwichSchema = new mongoose.Schema({
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




const BreakfastSandwich = mongoose.model('BreakfastSandwich', BreakfastSandwichSchema)
module.exports = BreakfastSandwich