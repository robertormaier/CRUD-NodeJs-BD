

async function fetchAsync() {
    try {
        let response = await fetch('http://api.github.com/users/rommelcarneiro')
        let data = await response.json()
        console.log(data.name, data.bio)
    }
    catch (err) {
        console.log('Erro na requisição', err.message)
    }
}

console.log('Olá, mundo!')    
fetchAsync()
console.log('Terminou')