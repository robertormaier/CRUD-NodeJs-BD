url1 = 'https://api.github.com/users/rommelcarneiro'
url2 = 'https://api.github.com/users/andresantos'
url3 = 'https://api.github.com/users/raquelcosta'

Promise.all( [ fetch(url1), fetch(url2), fetch(url3) ])
  .then ( responses => {
    responses.forEach( response => {
      response.json().then( data => {
        console.log(data.name)
      })
    })
  })