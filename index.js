const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 8000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  return res.send('<h1> Hello World! </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})