// prereq
const express = require('express');
const userRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// data
let users = [
    { name:'jim', location:'austin', _id: uuidv4()}, 
    { name:'scott', location:'georgetown', _id: uuidv4()}, 
    { name:'phil', location:'new york,', _id: uuidv4()}, 
    { name:'james', location:'mexico', _id: uuidv4()}, 
    { name:'terry', location:'manhattan', _id: uuidv4()}, 
];

// routes
userRouter
    .get('/', (req, res) => {
        res.send(users)
    })
    
    .post('/', (req, res) => {
        const newUser = req.body;
        newUser._id = uuidv4();
        users.push(newUser);
        console.log(users);
        res.send(`post successful ${newUser.name}`);
    })
;

//modularization 
module.exports = userRouter;