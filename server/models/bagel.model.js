
const mongoose = require('mongoose')

const BagelSchema = new mongoose.Schema({
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




const Bagel = mongoose.model('Bagel', BagelSchema)
module.exports = Bagel