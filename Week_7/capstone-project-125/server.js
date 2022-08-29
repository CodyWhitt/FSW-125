// prereq
const express = require('express');
const app = express();
const PORT = 9000;

// route paths
const gameDataRouter = require('./src/Components/GameData');

// middleware
app.use(express.json());

// routes
app.use('/GameData', gameDataRouter)

// listener
app.listen(PORT, () => {
    console.log(`it's up and running on port: ${PORT}`)
});