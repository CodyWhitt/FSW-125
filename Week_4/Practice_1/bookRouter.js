const express = require('express');
const bookRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// 'fake data'
let books = [
    {title: 'what1', author: 'guy1', genre: 'one', _id: uuidv4()},
    {title: 'what2', author: 'guy2', genre: 'two', _id: uuidv4()},
    {title: 'what3', author: 'guy3', genre: 'three', _id: uuidv4()},
    {title: 'what4', author: 'guy4', genre: 'four', _id: uuidv4()}
]

// routes
bookRouter
    .get('/', (req, res) => {
        res.send(books)
    }) //GET all

    .get('/: bookID', (req, res) => {
        console.log(req)
    }) //GET one

    .post ('/', (req, res) => {
        const newBook = req.body;
        newBook._id = uuidv4();
        bookRouter.push(newBook);

        console.log(books)
        res.send(`Successfully added ${newBook.title} to the database`)
    }) // POST one

module.exports = bookRouter;