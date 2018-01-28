'use strict';

function stringOfNumbers(input) {
    let number = parseInt(input);
    let numberString = "";
    for (var i = 1; i <= number; i++) {
        numberString=numberString + i;
    }

    return numberString;
}


stringOfNumbers('11');