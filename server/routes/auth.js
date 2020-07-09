const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../keys');
const requireLogin = require("../middleware/requireLogin");

router.get('/',(req,res) => {
    res.send("hello");
})

router.get('/protected',requireLogin,(req,res) => {
    res.send("Hello user");
})

router.post('/signup',(req,res) => {
    const {name,email,password} = req.body;
    if(!email || !password || !name){
        return res.status(422).json({error: "Please enter all the fields"});
    }
    User.findOne({email:email})
    .then((saveduser) => {
        if(saveduser){
            return res.status(422).json({error:"User already exists with the email provided"});
        }

        bcrypt.hash(password,12)
        .then(hashedpassword =>{

            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user => {
                res.json({message:"User has been registered successfully"});
            })
            .catch(error => {
                console.log(error);
            })
        })
        
    })
    .catch(error => {
        console.log(error);
    })
})

router.post('/login',(req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({error: "Please provide email or password to login"});
    }
    User.findOne({email:email})
    .then((saveduser) => {
        if(!saveduser){
            return res.status(422).json({error: "Invaid Credentials"});
        }
        bcrypt.compare(password,saveduser.password)
        .then(doMatch => {
            if(doMatch){
                //res.json({message:"User has been logged in"});
                const token = jwt.sign({_id:saveduser._id},JWT_SECRET);
                res.json({token});
            }
            else{
                return res.status(422).json({error: "Invalid Credentials"});
                
            }
        })
        .catch(error => {
            console.log(error);
        })
    })
})

module.exports = router;