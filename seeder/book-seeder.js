const Book = require('../models/Book')
const mongoose = require('mongoose')


mongoose.Promise = require('bluebird')
mongoose.connect('localhost:27017/bookAPI')

var books = [
    new Book({
        title: 'A Journey in to the Center of the Earth',
        author: 'Jules Verne',
        genre: 'Science Fiction',
        read: false
    }),
    new Book({
        title: 'The Dark World',
        author: 'Henry Kuttner',
        genre: 'Fantasy',
        read: false
    }),
    new Book({
        title: 'Life on the Mississippi',
        author: 'Mark Twain',
        genre: 'History',
        read: false
    }),
    new Book({
        title: 'Childhood',
        author: 'Lev Tolstoy',
        genre: 'Biography',
        read: false
    }),
    new Book({
        title: 'The Wind in the Willows',
        author: 'Kenneth Grahame',
        genre: 'Fantasy',
        read: false
    })
]

var done = 0
for (let i = 0; i < books.length; i++) {
    books[i].save((err, result) => {
        done++
        if (done === books.length) {
            exit()
        }
    })
}

const exit = () => {
    mongoose.disconnect()
}
