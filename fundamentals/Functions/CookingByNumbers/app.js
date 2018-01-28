'use strict';

function cookingByNumbers(input) {
    let result = input[0];
    
    for (var i = 1; i < input.length; i++) {
        result = calculations(result, input[i]);

        console.log(result);
    }

    function calculations(result, inputString) {
        switch (inputString) {
            case 'chop': return result / 2;
            case 'dice': return Math.sqrt(result);
            case 'spice': return result += 1;
            case 'bake': return result * 3;
            case 'fillet': return result-(result * 0.2);            
        }
    }

}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);