const mongoose = require('mongoose')

const HotDrinkSchema = new mongoose.Schema({
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




const HotDrink = mongoose.model('HotDrink', HotDrinkSchema)
module.exports = HotDrink