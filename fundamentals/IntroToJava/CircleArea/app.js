'use strict';

function CircleArea(n) {
    let area = Math.PI * (n * n);
    console.log(area);
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);
}

CircleArea(5)
