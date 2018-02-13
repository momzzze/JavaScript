'use strict';

function solve(arr) {
    let numbers = arr
    let smallestNumber = Math.min.apply(Math, arr);
    console.log(smallestNumber)
}
let arr = [17, 22, 17, 19, 17]
solve(arr)
