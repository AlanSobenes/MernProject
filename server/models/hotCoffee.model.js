const mongoose = require('mongoose')

const HotCoffeeSchema = new mongoose.Schema({
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




const HotCoffee = mongoose.model('HotCoffee', HotCoffeeSchema)
module.exports = HotCoffee