'use strict';

function catchNumbers(arr) {
    let input = arr.join('')
    let pattern = /\d+/g
    let result=input.match(pattern)
    console.log(result.join(' '))
}


console.log(catchNumbers(['The300','What is that?',"I think it’s the 3rd movie.",'Lets watch it at 22:45']))