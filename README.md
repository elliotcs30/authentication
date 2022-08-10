# 2-3 A13: 帳密檢查機制

## 專案功能
* 使用者在表單裡輸入帳密：email & password
* 發送表單，把帳密傳送給伺服器
* 伺服器拿到資料，開始比對內建的使用者名單
* 如果找不到 username，或是 password 錯誤，就彈回登入頁並且在介面上顯示「Username 或Password 錯誤」
* 如果 username + password 組合正確，使用者就進入自己的 welcome page，在此頁面上會顯示登入使用者的 firstName

## 安裝套件
* node v16.15.1
* Express v4.17.1
* mongoose v6.0.4
* nodemon v2.0.19
* MongoDB + 3T
* express-handlebars v4.0.2
* method-override v3.0.0
* body-parser v1.20.0
* node-localstorage

## 執行專案
1. 將本專案clone進本地端

2. 安裝套件:
```shell
  npm i express@4.17.1 mongoose@6.0.4 nodemon@2.0.19 express-handlebars@4.0.2 method-override@3.0.0 body-parser@1.20.0

  npm install node-localstorage
```

3. 修改資料庫連線設定，本專案是使用 3T:
```shell
  export MONGODB_URI="mongodb+srv://<your name>:<your password>@cluster0.ayhtm.mongodb.net/user?retryWrites=true&w=majority"
```

4. 新增種子資料到資料庫，在終端機執行:
  ```shell
    npm run seed
  ```

5. 種子資料新增成功，會看到以下訊息:
  ```shell
    add seed data done.
  ```

6. 啟動伺服器:
```shell
  npm run start
```

7. 終端機起動成功會顯示以下訊息:
```shell
  App is running on http://localhost:3000 
  mongodb connected!
```