'use strict';

function rotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations % arr.length ; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '))
}




let arr = ['Banana', 'Orange', 'Coconut', 'Apple', 15]
rotateArray(arr);