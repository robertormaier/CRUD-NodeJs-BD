fetch('http://api.github.com/users/rommelcarneiro')
    .then(response => response.json())  
    .then(data => console.log(data.name, data.bio)) 
    .catch(function (err) { console.log('Erro na requisição', err.message) }) 