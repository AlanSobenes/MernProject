const mongoose = require('mongoose')

const EggBiteSchema = new mongoose.Schema({
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




const EggBite = mongoose.model('EggBite', EggBiteSchema)
module.exports = EggBite