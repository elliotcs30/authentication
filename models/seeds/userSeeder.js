const mongoose = require('mongoose')
const User = require('../user') // 載入 account model
const userList = require('../../users.json').users

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')

  User.create( userList )
    .then(() => {
      console.log('add seed data done.')
    })
    .catch(error => {
      console.log(error)
    })
})