const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../keys');
const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = (req,res,next) => {
    console.log("inside module exports");
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error: "User is not authorized, user must be logged in"});
    }
    const token = authorization.replace("Bearer ","");
    jwt.verify(token,JWT_SECRET, (error,payload) => {
        console.log("verifying token");
        if(error){
            return res.status(401).json({error: "User must be logged in"});
        }

        const {_id} = payload
        User.findById(_id).then(userData => {
            console.log("searching user");
            req.user = userData;
        })
        next();
    })
}