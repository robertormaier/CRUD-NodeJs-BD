const express = require('express');
const apiV2Router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV]);

// Process the request body and populate req.body
apiV2Router.use(express.json());

//---------------------------------------------- API

// obter todos os produtos
apiV2Router.get('/produtos', (req, res) => {
    knex('produtos')
        .then(produtos => {
            res.status(200).json(produtos);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Um erro ocorreu: ' + err.message,
            });
        });
});

// obter o produto especifico por   ID
apiV2Router.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    knex('produtos')
        .then(produtos => {
            const idx = produtos.findIndex(p => p.id === id);
            res.status(200).json(produtos[idx]);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Um erro ocorreu: ' + err.message,
            });
        });
});

// criar um novo produto
apiV2Router.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    knex('produtos')
        .insert({ nome, preco })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Um erro ocorreu: ' + err.message,
            });
        });
});

// atualizar um produto por ID
apiV2Router.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    knex('produtos')
        .where('id', id)
        .update({ nome, preco })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Um erro ocorreu: ' + err.message,
            });
        });
});

// deletar um produto por ID
apiV2Router.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    knex('produtos')
        .where('id', id)
        .del()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Um erro ocorreu: ' + err.message,
            });
        });
});

module.exports = apiV2Router;