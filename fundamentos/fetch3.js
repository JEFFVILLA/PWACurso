// https://reqres.in/api/users

let usuario = {
    nombre: 'Jeffri',
    edad: 25
}

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then ( resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error Peticion')
    console.log(error);
});