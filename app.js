import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


//db setup
const db = mongoose.connect('localhost:27017/bookAPI')

import Book from './models/Book'

const app = express()

const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter)
//app.use('/api/authors', authorRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})
