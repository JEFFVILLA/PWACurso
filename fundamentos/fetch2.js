// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then( resp => {
        resp.json().then(console.log);
        
    });

