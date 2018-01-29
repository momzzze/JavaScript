'use strict';

function main(input) {
    let degree = input[input.length - 1];
    input.pop();

    for (var i = 0; i <input.length; i+=degree) {
        console.log(input[i]);
    }
}
main([1,2,3,4,5,6])