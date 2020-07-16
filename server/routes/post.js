const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requirLogin = require('../middleware/requireLogin');
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allpost",(req,res) => {
    Post.find()
    .populate("postedBy","_id name")
    .then(posts => {
        res.json({posts});
    })
    .catch(error => {
        console.log(error);
    })
})

router.post('/createpost',requireLogin,(req,res) => {
    const {title,body} = req.body;
    if(!title || !body){
        res.status(422).json({error: "Please all the fields"});
    }
     
    req.user.password = undefined;
    const post = new Post({
        title: title,
        body: body,
        postedBy: req.user 
    })
    post.save().then(result => {
        res.json({post:result});
    })
    .catch(err => {
        console.log(err);
    })
})

router.get('/mypost',requirLogin,(req,res) => {
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mypost => {
        res.json({mypost});
    })
    .catch(error => {
        console.log(error);
    })
})

module.exports = router;