const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName : {
    type: 'string', // 資料型別是字串
    require: true // 這是個必填欄位
  },
  email : {
    type: 'string', // 資料型別是字串
    require: true // 這是個必填欄位
  },
  password : {
    type: 'string', // 資料型別是字串
    require: true // 這是個必填欄位
  }
})

module.exports = mongoose.model('User', userSchema)