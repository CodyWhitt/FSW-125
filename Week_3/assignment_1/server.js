// prereq
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;

// route paths
const recycledRouter = require('./routes/recycled');

// middleware
app.use(express.json());

// routes
app.use('/recycled', recycledRouter)

// listener
app.listen(PORT, () => {
    console.log(`it's up and running on port: ${PORT}`)
});