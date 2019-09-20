function sumarUno (numero) {
    var promesa = new Promise (function (resolve, reject) {
        console.log(numero);
        if (numero => 7) {
            reject('El numero es muy alto');
        }
        setTimeout (() => {
            resolve(numero+1);
        },800);
    });

    return promesa;
}

sumarUno(5)
    .then(nuevoValor => {
        
    })
    .catch(error =>{
        console.log('Error en Promesa');
        console.log(error);
    })
// .then(sumarUno)
// .then( nuevoNumero => {
//     console.log(nuevoNumero);
// });