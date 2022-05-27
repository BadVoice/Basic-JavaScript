//now i will study basic JavaScript

//array 
let array = new Array(3, 7, 12, true, 4.5, "some string", true);
document.write(array[0]);
array[2] = array[0] + 1;
document.write(array[2]);

//undefined, null, true, false, NaN, Infinity, -Infinity.

let a;
console.log(a); // выведет undefined

let b = undefined;
console.log(b); // выведет undefined

let n = null;
console.log(n); // выведет null

console.log(10 / 0); // выведет Infinity
console.log(-10 / 0); // выведет -Infinity

let p = '5' % '2';
console.log(p);


let numOne = Number('10')
let numTwo = Number('20')
console.log(numOne + numTwo);

let nO = +'2'; // в переменную запишется число 2
let nT = +'3'; // в переменную запишется число 3
console.log(nO + nT); // выведет 5

// parseInt. ------------------- parseFloat

let parsI = parseInt('5px')
let parsF = parseFloat('6.25px')
let parsIF = (parsI + parsF)
if (parsIF == parsIF) {
    let print = parsIF + ('px')
    console.log(print)
} else {
    console.log(parsIF)
}

// String and length

let num1 = 19
let num2 = 20
let arr = (num1 + num2)
let str = String(arr)
let len = str.length
console.log(len)

// https://code.mu/ru/javascript/book/prime/basis/string-characters/ 






//