'use strict';

function tripLength(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);


    let x = 0;
    let y = 0;


    let distanceTo01 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distanceTo02 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let distanceTo03 = Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2));
    let firstPoint = Math.min(distanceTo01, distanceTo02, distanceTo03);
    let obj = { 1: distanceTo01, 2: distanceTo02, 3: distanceTo03 };
    let sum = distanceTo03 + distanceTo02 + distanceTo01;
    console.log(sum);
}
