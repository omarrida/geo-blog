const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Handle POST request to get blog posts from nearest user
app.post('/posts/proximity', (req, res) => {
  res.send('hello world');
})

// Handle invalid routes
app.all('*', function(req, res) {
    const response = { data: null, message: 'Route not found!!' }
    res.status(400).send(response)
  })
  
  // wrap express app instance with serverless http function
  module.exports.handler = serverless(app)