const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const exphbs = require('express-handlebars')

require('./config/mongoose')

// handlebars and template engine setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(port, () => {
  console.log (`Express is running on http://localhost:${port}`)
})