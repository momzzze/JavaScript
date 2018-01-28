'use strict';

function Cone(r,h) {
    let volume = (1 / 3) * Math.PI * r * r * h;
    let area =Math.PI*r*r+Math.PI * r * Math.sqrt(r * r + h * h);
    console.log(volume);
    console.log(area);
}

Cone(3,5)