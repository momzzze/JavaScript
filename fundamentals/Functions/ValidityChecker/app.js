'use strict';

function validityChecker(input) {

    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let distanceX1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    if (distanceX1 === parseInt(distanceX1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let distanceX2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    if (distanceX2 === parseInt(distanceX2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    let distanceBetweenX1X2 = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    if (distanceBetweenX1X2 === parseInt(distanceBetweenX1X2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}


validityChecker(['3', '0', '0', '4']);