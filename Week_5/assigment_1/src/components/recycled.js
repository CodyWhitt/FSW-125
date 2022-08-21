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
  // get-http://localhost:9000/recycled/
  .get('/', (req, res) => {
    res.send(recycledItems)
  }) // read all
   
  .post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);
    console.log(recycledItems);
    res.send(`post successful ${newItem.name}`);
  }) // create item

  // delete-http://localhost:9000/recycled/:_id
  .delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = recycledItems.findIndex(item => item._id === itemId); //finds index of wanted item
    recycledItems.splice(itemIndex, 1); // removes'splices' selected index item
    res.send('Resource successfully delete!');
  }) //delete item

  .put('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = recycledItems.findIndex(item => item._id === itemId); //finds index of wanted item
    Object.assign(recycledItems[itemIndex], req.body); //updates via body to item of index through .json format
    res.send(`Resource successfully updated`);
  }) //update item

;

//modularization 
module.exports = recycledRouter