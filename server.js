// create a basic http server with node.js
const http = require ('http')
const port = 3000
const ip = 'localhost'

// declare an array of product objects
const products = [
    {name: 'Notebook',price: 2499.99,discount: 0.15},
    {name: 'Smartphone',price: 3999.99,discount: 0.25},
    {name: 'Smartwatch',price: 1999.99,discount: 0.10}
]


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(products))
})

server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
})

