const express = require('express')
const apiV2Router = express.Router()
const knex = require('knex')(require('../knexfile.js')
[process.env.NODE_ENV])

// processar o corpo da requisição e colocar os dados em req.body
apiV2Router.use (express.json())

//---------------------------------------------- API
apiV2Router.get('/produtos', (req, res) => {
    knex('produtos')
    .then (produtos => {
        res.status(200).json(produtos)
    })
    .catch(err => {
        res.status(500).json({
            message : "erro meu guri"
        })
    })
})

apiV2Router.get('/produtos/:id', (req, res) => {
const id = parseInt (req.params.id)

    knex('produtos')
    .when()

})

apiV2Router.post('/produtos', (req, res) => {

})

apiV2Router.put('/produtos', (req, res) => {})

apiV2Router.delete('/produtos', (req, res) => {})

module.exports = apiV2Router