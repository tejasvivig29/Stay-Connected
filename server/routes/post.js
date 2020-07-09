const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requirLogin = require('../middleware/requireLogin');
const requireLogin = require("../middleware/requireLogin");

router.post('/createpost',requireLogin,(req,res) => {
    const {title,body} = req.body;
    if(!title || !body){
        res.status(422).json({error: "Please all the fields"});
    }
    const post = new Post({
        title: title,
        body: body
    })
})

module.exports = router;