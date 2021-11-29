const BreakfastSandwich = require('../models/breakfastSandwich.model')

module.exports = {
    getItems: (req, res) => {
        BreakfastSandwich.find()
            .then(allItems => res.json({items: allItems }))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        
    getOneItem: (req, res) => {
            BreakfastSandwich.findOne({ _id: req.params.id})
                .then(oneItem => res.json({ item: oneItem }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            
    createItem: (req, res) => {
            BreakfastSandwich.create(req.body)
            .then(newItem => res.json({ item: newItem}))
            .catch(err =>  res.status(400).json(err))
        },
        
    updateItem: (req, res) => {
            BreakfastSandwich.findByIdAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true}
                )
                .then(updateItme=> res.json({ item: updateItem }))
                .catch(err =>  res.status(400).json(err))
        },
            
    deleteItem: (req, res) =>{
                BreakfastSandwich.findByIdAndDelete(req.params.id)
                .then(result => res.json({ result: result }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        }
            
}