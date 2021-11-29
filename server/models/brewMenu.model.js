const mongoose = require('mongoose')

const BrewMenuSchema = new mongoose.Schema({
        name: String,
        image: String
}, { timestamps: true })




const BrewMenu = mongoose.model('BrewMenu', BrewMenuSchema)
module.exports = BrewMenu