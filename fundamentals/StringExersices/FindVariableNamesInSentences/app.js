'use strict';

function findVariableNames(str) {
    let pattern = /\b_([A-Za-z0-9]*)\b/g
    let numbers = str.match(pattern)
    for (var i = 0; i < numbers.length; i++) {
        numbers[i]=numbers[i].substring(1,numbers[i].length)
    }
    console.log(numbers.join(','))
}


findVariableNames('_id ___ __invalidVariable _evenMoreInvalidVariable_ _validVariable')