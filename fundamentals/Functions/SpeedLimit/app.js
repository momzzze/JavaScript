'use strict';
 

function mainFunction(input) {
    let speed = input[0];
    let zone = input[1];
    let limit = getLimit(zone);
    if (speed>limit) {
        let overSpeed = speed - limit;
        if (overSpeed > 0 && overSpeed <= 20) {
            console.log('speeding');
        } else if (overSpeed > 20 && overSpeed <= 40) {
            console.log('excessive speeding');
        } else if (overSpeed > 40) {
            console.log('reckless driving');
        }
    } 
    
    function getLimit(zone) {
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
}
mainFunction(21, 'residential')