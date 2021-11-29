const BerryMenu = require('../models/berryMenu.model')

module.exports = {
    getItems: (req, res) => {
        BerryMenu.find()
            .then(allItems => res.json({ message: "Here are the Items...", items: allItems }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },

    getOneItem: (req, res) => {
        BerryMenu.findOne({ _id: req.params.id })
            .then(oneItem => res.json({ item: oneItem }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },

    createItem: (req, res) => {
        BerryMenu.create(req.body)
            .then(newItem => res.json({ item: newItem }))
            .catch(err => res.status(400).json(err))
    },

    updateItem: (req, res) => {
        BerryMenu.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updateItem => res.json({ item: updateItem }))
            .catch(err => res.status(400).json(err))
    },

    deleteItem: (req, res) => {
        BerryMenu.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    }

}