// prereq
const express = require('express');
const gameDataRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// data
let gameData = [
  { 
    name:'Halo: CE', 
    platform:'Xbox Original',
    four_player: false, 
    new_enemies: ['Grunt, ', 'Elite, ', 'Flood, '],
    levels: 10,
    _id: uuidv4()
  },

  { 
    name:'Halo 2', 
    platform:'Xbox Original',
    four_player: false, 
    new_enemies: ['Drone, ', 'Brute, ', 'Sentinal, '],
    levels: 15,
    _id: uuidv4()
  },
  { 
    name:'Halo 3', 
    platform:'Xbox 360',
    four_player: true, 
    new_enemies: ['Flood: Tank, ', 'Ultra Brute, ', 'Flood: Ranged, '],
    levels: 10,
    _id: uuidv4()
  },
  { 
    name:'Halo 3: ODST', 
    platform:'Xbox 360',
    four_player: true, 
    new_enemies: ['Drone: Pupa, ', 'Drone: Major, ', 'Drone: Ultra, '],
    levels: 10,
    _id: uuidv4()
  },
  { 
    name:'Halo: Reach', 
    platform:'Xbox 360',
    four_player: true, 
    new_enemies: ['Guta, ', 'Skirmisher, ', 'Elite: General, '],
    levels: 10,
    _id: uuidv4()
  },
];

// routes
gameDataRouter
  // get-http://localhost:9000/recycled/
  .get('/', (req, res) => {
    res.send(gameData)
    
  }) // read all
   
  .post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    gameData.push(newItem);
    res.send(`post successful ${newItem.name}`);

  }) // create item

  // delete-http://localhost:9000/recycled/:_id
  .delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = gameData.findIndex(item => item._id === itemId); //finds index of wanted item
    gameData.splice(itemIndex, 1); // removes'splices' selected index item
    res.send('Resource successfully delete!');

  }) //delete item

  .put('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = gameData.findIndex(item => item._id === itemId); //finds index of wanted item
    Object.assign(gameData[itemIndex], req.body); //updates via body to item of index through .json format
    res.send(`Resource successfully updated`);

  }) //update item

  .get('/:itemId', (req, res) => {
    const itemId = req.params.itemId; //assigns /:itemId from url to a var
    const itemIndex = gameData.findIndex(item => item._id === itemId); //finds index of wanted item
    res.send(gameData[itemIndex])
    

  })

  .get('/search/:name', (req, res) => {    
    const itemName = req.params.name.toLowerCase()
    const filteredItems = gameData.filter(game => game.name.toLowerCase().includes(itemName))
    console.log(filteredItems)
    res.send(filteredItems)

  })

;

//modularization 
module.exports = gameDataRouter 