/* Respuesta = 15 */
Promise.resolve(20)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if (x == 22) throw 'Error'
        else return 80
    })
    .then(x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log)

/* Respuesta = Tira error porque se cumple la condición del if*/
Promise.resolve(10)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if (x == 22) throw 'Error'
        else return 80
    })
    .then(x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log) 
/* Respuesta = Pasa directamente al .catch porque es reject y muestra por pantalla el valor 30 */
Promise.reject(30)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if (x == 22) throw `Error`
        else return 80
    })
    .then(x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log)