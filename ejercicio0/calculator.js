"use strict";

/** Haz una calculadora que sea un único programa al que le puedes pasar dos parámetros y el usuario podrá visualizar por consola la suma, resta, división y multiplicación entre ambos números. El resultado debería mostrarse con 2 decimales máximo (En caso de que hubieran).
Si se introduce cualquier cosa que no sean números el programa debe actuar correctamente, es decir, mostrando una advertencia de que has introducido datos erróneos.

Si el usuario introduce un numero sólamente, deberá mostrar SOLO su raíz cuadrada, si introduce los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

 */


let sum = 0;
let sub = 0;
let mult = 0;
let div = 0;
let root = 0;
let exit = false;
let numbers = [];

while (!exit) {
    let number = prompt('enter a number');
    if (isNaN(number) || number == 0) {
        alert('enter a valid character');
    }
    if (number === null) {
        calculate();
        exit = true;
    } else {
        numbers.push(number);
    }
};



function calculate(number) {
    if (numbers.length <= 0) {
        alert('enter at least one number');
    } else if (numbers.length === 1) {
        root = Math.sqrt(numbers[0]).toFixed(2);
        alert('square root of ' + numbers[0] + 'is' + root);
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (i === 0) {
                sum = parseFloat(numbers[i]);
                sub = parseFloat(numbers[i]);
                mult = parseFloat(numbers[i]);
                div = parseFloat(numbers[i]);
            } else {
                sum = sum + parseFloat(numbers[i]);
                sub = sub - parseFloat(numbers[i]);
                mult = mult * parseFloat(numbers[i]);
                div = div / parseFloat(numbers[i]);
            }
        }
        alert('the result of your operations are as follows. Sum = ' + sum + ' , subtraction = ' + sub + ' , multiplication = ' + mult + ' , and division = ' + div);
    }
};