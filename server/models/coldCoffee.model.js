const mongoose = require('mongoose')

const ColdCoffeeSchema = new mongoose.Schema({
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




const ColdCoffee = mongoose.model('ColdCoffee', ColdCoffeeSchema)
module.exports = ColdCoffee