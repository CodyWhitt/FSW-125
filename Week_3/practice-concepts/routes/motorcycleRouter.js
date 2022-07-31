// prereq
const express = require('express');
const motorcycleRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// data
let motorcycles = [
    { make:'Yamaha', model:'Bolt', _id: uuidv4()}, 
    { make:'Zero', model:'SR/F', _id: uuidv4()}, 
    { make:'Kawasaki', model:'KLR 650', _id: uuidv4()}, 
    { make:'Benelli', model:'TNT135', _id: uuidv4()}, 
    { make:'Harley Davidson', model:'StreetGlide', _id: uuidv4()}, 
];

// routes
motorcycleRouter
    .get('/', (req, res) => {
        res.send(motorcycles)
    })

    .post('/', (req, res) => {
        const newMotorcycle = req.body;
        newMotorcycle._id = uuidv4();
        motorcycles.push(newMotorcycle);
        console.log(motorcycles);
        res.send(`post successful ${newMotorcycle.make}`);
    })
;

// modularization 
module.exports = motorcycleRouter;