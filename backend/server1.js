const express = require('express')
const dotenv = require('dotenv').config();
const colors = require('colors')
const port = 5001
const {errorHandler} = require('./middleware/errorMiddleware') 

const connectDB = require('./config/db')

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended : false})) 

app.use(errorHandler)
connectDB()
//error and db connections are directly run in the server 1d

app.use('/api/goals',require('./routes/Routes'))
//uses route --> controller --> model
app.use('/api/users', require('./routes/userRoute'))
//added for new users step 1
//server1 --> userRoute --> userController --> userModel
            //api/users/login or api/users/me
app.listen(port, () => console.log(`Server started on port ${port}`))



