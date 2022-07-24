const express = require('express');
const app = express();

const PORT = 3000; 

let users = [
    { name:'jim', location:'austin'}, 
    { name:'scott', location:'georgetown'}, 
    { name:'phil', location:'new york'}, 
    { name:'james', location:'mexico'}, 
    { name:'terry', location:'manhattan'}, 
];

let games = [
    { name:'Halo', releaseDate:'11/15/01'}, 
    { name:'Call of Duty', releaseDate:'10/29/03'}, 
    { name:'Donkey Kong 64', releaseDate:'11/22/1999'}, 
    { name:'GoldenEye 007', releaseDate:'8/25/1997'}, 
    { name:'Super Mario Bros.', releaseDate:'9/13/1985'}, 
];

let motorcycles = [
    { Make:'Yamaha', Model:'Bolt'}, 
    { name:'Zero', location:'SR/F'}, 
    { name:'Kawasaki', location:'KLR 650'}, 
    { name:'Benelli', location:'TNT135'}, 
    { name:'Harley Davidson', location:'StreetGlide'}, 
];

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/games', (req, res) => {
    res.send(games)
});

app.get('/motorcycles', (req, res) => {
    res.send(motorcycles)
});

app.listen(PORT, () => {
    console.log(`it's up and running on port: ${PORT}`)
});
 