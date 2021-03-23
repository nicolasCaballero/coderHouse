const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 5 * 1000)
});

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(2)
    }, 3 * 1000)
});

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res(3)
    }, 8 * 1000)
});

Promise.all([promise1, promise2, promise3])
    .then(res => console.log(res))
    /*     Si alguna promesa falla, no se ejecutará el then, sinó que ingresará el catch automaticamente */
    .catch(res => console.log(`Ups! Algo falló`, res));

/* DEVUELVE LA PRIMER PROMESA QUE SE CUMPLA */
Promise.race([promise1, promise2, promise3])
    .then(res => console.log(res))
    /* Si alguna promesa falla, no se ejecutará el then, sinó que ingresará el catch automaticamente */
    .catch(res => console.log(`Ups! Algo falló`, res));

Promise.resolve(2)
    .then(res => res * 2)
    .then(res => res * 2)
    .then(res => res * 2)
    .then(res => res * 2)
    .then(res => {
        console.log(res);
    })