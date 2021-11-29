const mongoose = require('mongoose')

const BerryMenuSchema = new mongoose.Schema({
        name: String,
        image: String
}, { timestamps: true })




const BerryMenu = mongoose.model('BerryMenu', BerryMenuSchema)
module.exports = BerryMenu