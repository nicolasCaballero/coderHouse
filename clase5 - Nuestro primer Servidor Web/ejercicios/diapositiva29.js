const productos = [{
        id: 1,
        nombre: 'Escuadra',
        precio: 323.45
    },
    {
        id: 2,
        nombre: 'Calculadora',
        precio: 234.56
    },
    {
        id: 3,
        nombre: 'Globo Terráqueo',
        precio: 45.67
    },
    {
        id: 4,
        nombre: 'Paleta Pintura',
        precio: 456.78
    },
    {
        id: 5,
        nombre: 'Reloj',
        precio: 67.89
    },
    {
        id: 6,
        nombre: 'Agenda',
        precio: 78.90
    }
];

/* Ejercicio A) */
let names = [];
let productsNames = arr => {
    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].nombre)
    };
    return `Products Names: ${names.toString()}`;
};

/* Ejercicio B) */
let totalPrice = [];

let productPrices = arr => {
    for (let i = 0; i < arr.length; i++) {       
        totalPrice.push(arr[i].precio)
    };
    return `Summ of products prices: ${totalPrice.reduce((a, b) => a + b, 0).toFixed(2)}`;
};

/* Ejercicio C) */
let avgPrice = [];

let productPrice = arr => {
    for (let i = 0; i < arr.length; i++) {       
        avgPrice.push(arr[i].precio)
    };
    return `Average price of all products: ${Math.round(avgPrice.reduce((a, b) => a + b, 0) / avgPrice.length).toFixed(2)}`;
};

/* Ejercicio D) */
let minPrice = [];

let minimunPrice = arr => {
    for (let i = 0; i < arr.length; i++) {       
        minPrice.push(arr[i].precio)
    };
    return `Lowest price of products is: ${Math.min.apply(Math, minPrice)}`;
};

/* Ejercicio E) */
let maxPrice = [];

let maximumPrice = arr => {
    for (let i = 0; i < arr.length; i++) {       
        maxPrice.push(arr[i].precio)
    };
    return `Highest price of products is: ${Math.max.apply(Math, maxPrice)}`;
};

/* Ejercicio F) */
const newObj = {
    id: 1,
    name: productsNames(productos),
    totalPrice: productPrices(productos),
    avgPrice: productPrice(productos),
    lowestPrice: minimunPrice(productos),
    highestPrice: maximumPrice(productos)
};

console.log(newObj);