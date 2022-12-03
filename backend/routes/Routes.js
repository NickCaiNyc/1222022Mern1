const express = require('express')
const router = express.Router()

const {getGoal,setGoal,updateGoal,deleteGoal} = require('../controller/Controller')

//get //post
router.route('/').get(getGoal).post(setGoal)

//put //delete
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
