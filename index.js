const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator/check')
const axios = require('axios')
const getClosestUser = require('./methods')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Handle POST request to get blog posts from nearest user
app.post('/posts/proximity', [
    check('geo.lat').isNumeric(),
    check('geo.lng').isNumeric()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
        .then(axios.spread((usersResponse, postsResponse) => {
            closestUser = getClosestUser(usersResponse.data, { lat: req.body.geo.lat, lng: req.body.geo.lng })
            closestUserPosts = postsResponse.data.filter(post => post.userId === closestUser.id);
            return res.send(closestUserPosts);
        }))
        .catch(function (error) {
            return res.status(500).json({ errors: error.toString() });
        });
})

// Handle invalid routes
app.all('*', function (req, res) {
    const response = { data: null, message: 'Route not found!' }
    res.status(400).send(response)
})

// wrap express app instance with serverless http function
module.exports.handler = serverless(app)