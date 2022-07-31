// prereq
const express = require('express');
const gameRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// data
let games = [
    { name:'Halo', releaseDate:'11/15/01', _id: uuidv4()}, 
    { name:'Call of Duty', releaseDate:'10/29/03', _id: uuidv4()}, 
    { name:'Donkey Kong 64', releaseDate:'11/22/1999', _id: uuidv4()}, 
    { name:'GoldenEye 007', releaseDate:'8/25/1997', _id: uuidv4()}, 
    { name:'Super Mario Bros.', releaseDate:'9/13/1985', _id: uuidv4()}, 
];

// routes
gameRouter
    .get('/', (req, res) => {
        res.send(games)
    })
    
    .post('/', (req, res) => {
        const newGame = req.body;
        newGame._id = uuidv4();
        games.push(newGame);
        console.log(games);
        res.send(`post successful ${newGame.name}`);
    })
;

// modularization 
module.exports = gameRouter;