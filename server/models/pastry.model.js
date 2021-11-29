const mongoose = require('mongoose')

const PastrySchema = new mongoose.Schema({
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




const Pastry = mongoose.model('Pastry', PastrySchema)
module.exports = Pastry