const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requirLogin = require('../middleware/requireLogin');
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allpost",requireLogin,(req,res) => {
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
    const {title,body,pic} = req.body;
    if(!title || !body || !pic){
        res.status(422).json({error: "Please all the fields"});
    }
     
    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        photo:pic,
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

router.put("/like",requireLogin,(req,res) => {
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new: true
    }).exec((err,result) => {
         if(err){
             return res.status(422).json({error:err})
         }
         else{
             res.json(result)
         }
    })
})

router.put("/unlike",requireLogin,(req,res) => {
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new: true
    }).exec((err,result) => {
         if(err){
             return res.status(422).json({error:err})
         }
         else{
             res.json(result)
         }
    })
})


module.exports = router;