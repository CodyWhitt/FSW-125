// prereq
const express = require('express');
const recycledRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// data
let recycledItems = [
    { 
      name:'Plastic Jug', 
      description:'plastic container',
      recyclable: true, 
      quantity: 12,
      pricePerUnit: '$' + .23,
      _id: uuidv4()
    },

    { 
      name:'Box', 
      description:'cardboard box', 
      recyclable: true, 
      quantity: 1,
      pricePerUnit: '$' + .15,
      _id: uuidv4()
    },
];

// routes
recycledRouter
    .get('/', (req, res) => {
        res.send(recycledItems)
    })
    
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        recycledItems.push(newItem);
        console.log(recycledItems);
        res.send(`post successful ${newItem.name}`);
    })
;

//modularization 
module.exports = recycledRouter