//defines our fields
const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        text: {
            type:String,
            required: [true, 'Please add a text value'],
        },  
        username:{
            type:String,
            required: [true, 'Please add a text value'],
        },
        email:{
            type:String,
            required: [true, 'Please add a text value'],
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('Goal', goalSchema) //goalController.js