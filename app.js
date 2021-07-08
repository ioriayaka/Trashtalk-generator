// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const list = require('./contents.json')
const trashTalkGenerator = require('./javascripts.js')
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// use body-parser
app.use(express.urlencoded({ extended: true }))
// setting routes
app.get('/', (req, res) => {
  res.render('index', { targets: list.job })
})
//產生幹話
app.post('/', (req, res) => {
  const trashTalk = trashTalkGenerator(req.body.career)
  res.render('index', { targets: list.job, trashTalk: trashTalk })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}.`)
})