//'use strict';

function solve(input) {
    let spice = Number(input)
    let total = 0
    let days = 0
    while (spice >= 100) {
        total += spice - 26
        spice = spice - 10
        days++
    } 
    total -= 26
    if (total < 0) total = 0;
    console.log(days)
    console.log(total)
}
solve(450)