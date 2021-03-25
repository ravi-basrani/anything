const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
}, { timestamps: true })

module.exports = model('User', userSchema)