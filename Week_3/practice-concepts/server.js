// prereq
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

// route paths
const userRouter = require('./routes/userRouter');
const motorcycleRouter = require('./routes/motorcycleRouter');
const gameRouter = require('./routes/gameRouter');

// middleware
app.use(express.json());

// routes
app.use('/users', userRouter)
app.use('/motorcycles', motorcycleRouter)
app.use('/games', gameRouter)

// listener
app.listen(PORT, () => {
    console.log(`it's up and running on port: ${PORT}`)
});