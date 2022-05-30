//es5
const sum5 = function(e, t) {
    return e + t;
}

//es6

let a = 5;
let b = 6;

const sum6 = ((a, b) => {
    return a + b
})

//es5
function sum(num1, num2) {
    if (num1 === undefined) {
        num1 = 0
    }
    if (b === undefined) {
        num2 = 0
    }
    return num2 + b
}
//es6
const sum7 = ((a = 0, b = 0) => {
    return a + b
})

console.log(sum7)

//es5
function square(number) {
    return number * number
};

//es6 
const square1 = number1 => number1 * number1


//es5 
const numbers = [1, 8, 3, 4, 9, 15, 44, 18]
numbers.sort(sortAbc)

function sortAbc(a, b) {
    return a - b
}

//es6 
const nums = [1, 8, 3, 4, 9, 15, 44, 18]
nums.sort((a, b) => a - b)



//es5 
var person = {
    name: 'John Doe',
    age: 44,
    languages: ['HTML', 'CSS', 'JavaScript'],
    greet: function() {
        console.log(this.name)
    }
}

//es6 
const person1 = {
    name: 'John Doe',
    age: 44,
    languages: ['HTML', 'CSS', 'JavaScript'],
    greet() {
        console.log(this)
        this.languages.forEach(() => {
            console.log(this)
        })
    }
}