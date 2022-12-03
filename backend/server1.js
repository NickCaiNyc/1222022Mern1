const express = require('express')
const dotenv = require('dotenv').config();
const port = 5001
const {errorHandler} = require('./middleware/errorMiddleware') 

const colors = require('colors')

const connectDB = require('./config/db')


const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))

app.use(express.json())
app.use(express.urlencoded({extended : false})) 

app.use('/api/goals',require('./routes/Routes'))
//uses route --> controller --> model

app.use(errorHandler)
connectDB()
//error and db connections are directly run in the server 1


