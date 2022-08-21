// prereq
const express = require('express');
const itemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


// data
let items = [
    { 
      name:'potato', 
      type:'veggie',
      _id: uuidv4()
    },
  
    { 
      name:'apple', 
      type:'fruit', 
      _id: uuidv4()
    },
    { 
      name:'carrot', 
      type:'veggie',
      _id: uuidv4()
    },
    
    { 
      name:'orange', 
      type:'fruit', 
      _id: uuidv4()
    },
];

// routes
itemsRouter
  // get-http://localhost:9000/items/
  .get('/', (req, res) => {
    res.send(items)
  }) // read all
   
  .post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    items.push(newItem);
    console.log(items);
    res.send(`post successful ${newItem.name}`);
  }) // create item

  // delete-http://localhost:9000/items/:_id
  .delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = items.findIndex(item => item._id === itemId); //finds index of wanted item
    items.splice(itemIndex, 1); // removes'splices' selected index item
    res.send('Resource successfully delete!');
  }) //delete item

  .put('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = items.findIndex(item => item._id === itemId); //finds index of wanted item
    Object.assign(items[itemIndex], req.body); //updates via body to item of index through .json format
    res.send(`Resource successfully updated`);
  }) //update item

;

//modularization 
module.exports = itemsRouter