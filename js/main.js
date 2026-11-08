//ejercicio 1
/*
let a = 5,
b = 10;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);
*/

//ejerccio 2
/*
const array = [1, 2, 3, 4];
console.log(array);
console.log([2]);
*/

//ejercicio 3
/*
const persona = { edad: 25};
const { edad, nombre = "desconocido" } = persona;
console.log(nombre);
*/

//ejercicio 4

const array = [4, 5, 6, 7];
console.log(array); 

function sumar([a, b, c, d]) {
    return a + b + c;
}
console.log(sumar(a, b, c));