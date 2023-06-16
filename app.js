const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const exphbs = require('express-handlebars')

require('./config/mongoose')

// handlebars and template engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// 利用 app.use 讓每筆請求都會經過以下模板進行前置處理,才會到路由
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log (`Express is running on http://localhost:${port}`)
})