'use strict';

function mainFuncion (callback) {
    const num1FromUser = +prompt('enter 1st number');
    const num2FromUser = +prompt('enter 2nd number');
    callback(num1FromUser, num2FromUser);
}
function exponentiation (num1FromUser, num2FromUser){
    let result = Math.pow(num1FromUser, num2FromUser);
    alert(`result is ${result}`);
}
function multiplay (num1FromUser, num2FromUser){
    let result = num1FromUser * num2FromUser;
    alert(`result is ${result}`);
}
function division (num1FromUser, num2FromUser){
    let result = num1FromUser / num2FromUser;
    alert(`result is ${result}`);
}
function modulo (num1FromUser, num2FromUser){
    let result = num1FromUser % num2FromUser;
    alert(`result is ${result}`);
}
mainFuncion(exponentiation);
mainFuncion(multiplay);
mainFuncion(division);
mainFuncion(modulo);
