const Goal = require('../model/Model')

const asyncHandler = require('express-async-handler')
//functions to get goals
const getGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.find()
    res.status(200).json({goal})
})



const setGoal = asyncHandler(async (req, res) => {
    // console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add Goal') //errorMiddle.js
    }
    // if(!req.body.username){
    //     res.status(400)
    //     throw new Error('Please add username') //errorMiddle.js
    // }
    // if(!req.body.email){
    //     res.status(400)
    //     throw new Error('Please add new text field') //errorMiddle.js
    // }
    const a = await Goal.create({ //step 8 setting up connection with mongo to take in from it and output from it
        text: req.body.text,
        // username: req.body.username,
        // email: req.body.email,
    })

    res.status(200).json({a})
})

const updateGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Please add new text field on postman')
    }
    const updateGoals = await Goal.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({updateGoals})
})


const deleteGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Please add new text field on postman')
    }
    const deletedgoal = await Goal.findByIdAndRemove(req.params.id)
    res.status(200).json({deletedgoal})
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}