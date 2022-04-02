const mongoose = require('mongoose')
require('dotenv').config()

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/choresDatabase'
// let dbUrl = 'mongodb+srv://dwu621:dG3bClhAejvAUBAM@chorescluster.mgub1.mongodb.net/choresDatabase?retryWrites=true&w=majority'
mongoose
  .connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db