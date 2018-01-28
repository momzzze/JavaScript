'use strict';

function OddOrEven(n) {    
        let ifEven = n % 2
        if (ifEven == 0) 
        console.log("even");
        else if (ifEven == Math.round(ifEven))
        console.log("odd");
        else console.log("invalid")          
}

OddOrEven(0)
