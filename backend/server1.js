//MAJOR IDEA NEEDED FOR REST.API FOR USERS AND GOALS (GOALS IS EXCLUSIVE)
//NEED
/*
BACKEND
    SERVER -- CONNECT TO EVERYTHING INCLUDING 
        calls the routes
            just routes honestly to everything
    ROUTES -- CONNECT TO CONTROLLERS
        calls the controllers
            controllers are like functions to get stuff that you want

    CONTROLLER -- CONNECT TO MODEL
        calls the model 
            model has formate of what you want from the controllers


    const jwt = require('jsonwebtoken')
    const bcrypt = require('bcryptjs')
    asyncHandler
        middle ware 
        added files:
            in order
                userRoute - new file - route to userController
                    Routes - add protect
                userController - new file - functions for get register login as user for user email variable
                userModel - new file - add user email password variables
                    Model - add userModel into with the goal
                authMiddleware - new file - protect function which needs a token in order to pass otherwise no data
    Idea of project
        Each account had a name, email, password
            Based on each account and their token, they have their own set of goals
                    
*/
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



