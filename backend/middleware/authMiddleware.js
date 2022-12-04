const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


//checking header, see if bearer , assigning token, verifying, getting user from token, next
//uses next since middle ware, basically checking to token
const protect = asyncHandler(async (req, res, next) => {
    let token

    //check authorization object
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from header 
            token = req.headers.authorization.split(' ')[1]
            //Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //Get user from the token
            req.user = await User.findById(decoded.id).select('-password') //select here doesn't include passward

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')

    }
})

module.exports = {protect}