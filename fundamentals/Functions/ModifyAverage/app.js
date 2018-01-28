'use strict';

function modifyAverage(input) {

    let numberString = `${input}`;
    let sum = 0;
    while (true) {       
        for (var i = 0; i < numberString.length; i++) {
            sum += Number(numberString.charAt(i));
        }
        if (sum / numberString.length > 5) {
            console.log(numberString); break;
        } else {
            numberString += 9;
        }
        sum = 0;        
    }
   
}
modifyAverage(5835)