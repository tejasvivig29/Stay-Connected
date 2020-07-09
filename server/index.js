const express = require('express');
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const {MONGOURI} = require('./keys');


mongoose.model('User');





mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log("Database has been connected");
})

mongoose.connection.on('error', (err)=>{
    console.log("We have got an error while connecting to the database",err);
})

require('./models/user');
require('./models/post');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

//rLUrDWeIt8txWfkA

app.listen(port, function(req,res){
    console.log("Application is running on 3000 port");
})