import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  },
  read: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Book', schema)
