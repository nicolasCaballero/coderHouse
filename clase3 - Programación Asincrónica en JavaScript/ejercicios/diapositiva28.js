 let addition = (n1, n2) => n1 + n2;
 let substraction = (n1, n2) => n1 - n2;
 let divition = (n1, n2) => n1 / n2;
 let multiplication = (n1, n2) => n1 * n2;

 let operar = (v1, v2, cb) => cb(v1, v2);
 console.log(operar(10, 20, multiplication));