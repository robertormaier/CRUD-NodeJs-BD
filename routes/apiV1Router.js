const express = require('express')
const apiV1Router = express.Router()

const dados = {
    produtos: [
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
    ]
}

// processar o corpo da requisição e colocar os dados em req.body
apiV1Router.use (express.json())

//---------------------------------------------- API
apiV1Router.get('/produtos', (req, res) => {
    res.status(200).json(dados.produtos)
})

apiV1Router.get('/produtos/:id', (req, res) => {
    const id = parseInt (req.params.id)
    const idx = dados.produtos.findIndex (p => p.id === id)
    res.status(200).json(dados.produtos[idx])
})

apiV1Router.post('/produtos', (req, res) => {
    res.status(200).send (`dados recebidos: ${JSON.stringify(req.body)}`)

})

apiV1Router.put('/produtos', (req, res) => {})

apiV1Router.delete('/produtos', (req, res) => {})

module.exports = apiV1Router