// 載入 express 並建構應用程式伺服器
const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser') // 引用 body-parser
const User = require('./models/user')
const LocalStorage = require('node-localstorage').LocalStorage

localStorage = new LocalStorage('./scratch');

const app = express()
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
// 設定靜態檔案
app.use(express.static('public'))

// 設定首頁路由
app.get('/', (req, res) => {
  // 先到 localStorage 抓看看是否已經有登入名稱
  const user = localStorage.getItem('user')

  if (user) {
    res.render('index', { user })
  } else {
    res.render('index')
  }
})

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  return User.findOne({ 
    email: email, 
    password: password
  }).lean()
    .then(user => {
      if (!user) {
        return res.render('index', { error: '輸入電子郵件或密碼錯誤' })
      }

      // 將已登入的使用者名稱記錄在 localStorage
      localStorage.setItem('user', user.firstName);
      res.render('index', { user: user.firstName })
    })
    .catch(err => { console.log(err) })
})

// 設定 port 3000
app.listen(PORT, (req, res) => {
  console.log(`App is running on http://localhost:${PORT}`)
})