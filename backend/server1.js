

const express = require('express')
const dotenv = require('dotenv').config();
const port = 5001
const {errorHandler} = require('./middleware/errorMiddleware') 

const colors = require('colors')

const connectDB = require('./config/db')
connectDB()



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals',require('./routes/Routes'))



app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

