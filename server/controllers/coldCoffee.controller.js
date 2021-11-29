const ColdCoffee = require('../models/coldCoffee.model')

module.exports = {
    getItems: (req, res) => {
        ColdCoffee.find()
            .then(allItems => res.json({items: allItems }))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        
    getOneItem: (req, res) => {
            ColdCoffee.findOne({ _id: req.params.id})
                .then(oneItem => res.json({ item: oneItem }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            
    createItem: (req, res) => {
            ColdCoffee.create(req.body)
            .then(newItem => res.json({ item: newItem}))
            .catch(err =>  res.status(400).json(err))
        },
        
    updateItem: (req, res) => {
            ColdCoffee.findByIdAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true}
                )
                .then(updateItme=> res.json({ item: updateItem }))
                .catch(err =>  res.status(400).json(err))
        },
            
    deleteItem: (req, res) =>{
                ColdCoffee.findByIdAndDelete(req.params.id)
                .then(result => res.json({ result: result }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        }
            
}