// prereq
const express = require('express');
const app = express();
const PORT = 9000;

// route paths
const itemsRouter = require('./components/items');

// middleware
app.use(express.json());

// routes
app.use('/items', itemsRouter)

// listener
app.listen(PORT, () => {
    console.log(`it's up and running on port: ${PORT}`)
});