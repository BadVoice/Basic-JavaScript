// // ex. const data = [
//     {
//         "day": "sat",
//         "from": "10:00",
//         "to": "23:00"
//     },
//     {
//         "day": "mon",
//         "from": "11:00",
//         "to": "23:00"
//     },
//     {
//         "day": "tue",
//         "from": "11:00",
//         "to": "23:00"
//     },
//     {
//         "day": "wed",
//         "from": "11:00",
//         "to": "23:00"
//     },
//     {
//         "day": "thu",
//         "from": "12:00",
//         "to": "23:00"
//     },
//     {
//         "day": "fri",
//         "from": "12:00",
//         "to": "23:00"
//     },
//     {
//         "day": "sun",
//         "from": "11:00",
//         "to": "23:00"
//     }
// ]

//functions decloration
function unixTime() {
    let time = Math.floor(new Date().getTime())
    console.log(time)
}
unixTime()

function randomInt() {
    const min = 100
    const max = 200
    let rand = Math.floor(min + Math.random() * (max + 1 - min))
    console.log(rand)
}
randomInt()




let x = 10
let y = 9

function sum(x, y) {
    const result = x + y
    console.log(result)
}
sum(x, [0])


function showSumAll(...args) {
    console.log(args)
    let sum = args.reduce((accum, item) => accum += item)
    console.log(sum)
}

showSumAll(4, 1, 4, 5, 7, 8)