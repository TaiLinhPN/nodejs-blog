const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  const a= 0
  const b = 1
  const c = a + b

  res.send("`Example app listening on port ${port}`")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})