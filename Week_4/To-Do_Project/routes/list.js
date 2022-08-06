// prereq
const express = require('express');
const itemRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// data
let listItems = [
  { 
    name:'Go to gym', 
    time:'12:00 PM',
    completed: false, 
    _id: uuidv4()
  },

  { 
    name:'Do homework', 
    time:'3:00 PM', 
    completed: true, 
    _id: uuidv4()
  },
];

// routes
itemRouter
  .get('/', (req, res) => {
    res.send(listItems)
  }) // read all
  
  .get('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const singleItem = listItems.find(item => item._id === itemId); //finds item

    res.send(singleItem);
  }) //read one

  .post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    listItems.push(newItem);
    console.log(listItems);
    res.send(`post successful ${newItem.name}`);
  }) // create item

  .delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = listItems.findIndex(item => item._id === itemId); //finds index of wanted item
    listItems.splice(itemIndex, 1); // removes'splices' selected index item
    res.send('Resource successfully delete!');
  }) //delete item

  .put('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = listItems.findIndex(item => item._id === itemId); //finds index of wanted item
    Object.assign(listItems[itemIndex], req.body); //updates via body to item of index through .json format
    res.send(`Resource successfully updated`);
  }) //update item

;

//modularization 
module.exports = itemRouter