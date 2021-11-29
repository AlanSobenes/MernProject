
const mongoose = require('mongoose')

const FreshFruitBowlSchema = new mongoose.Schema({
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




const FreshFruitBowl = mongoose.model('FreshFruitBowl', FreshFruitBowlSchema)
module.exports = FreshFruitBowl