
const mongoose = require('mongoose')

const FreshJuiceSchema = new mongoose.Schema({
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




const FreshJuice = mongoose.model('FreshJuice', FreshJuiceSchema)
module.exports = FreshJuice