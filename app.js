const express = require('express')
const app = express()
 


app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) =>{
    res.sendFile(__dirname + '/views/works.html')
})
 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html')
  })
app.listen(3000)