const mongoose = require('mongoose')

const BreakfastBurritoSchema = new mongoose.Schema({
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




const BreakfastBurrito = mongoose.model('BreakfastBurrito', BreakfastBurritoSchema)
module.exports = BreakfastBurrito