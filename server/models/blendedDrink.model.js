const mongoose = require('mongoose')

const BlendedDrinkSchema = new mongoose.Schema({
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




const BlendedDrink = mongoose.model('BlendedDrink', BlendedDrinkSchema)
module.exports = BlendedDrink