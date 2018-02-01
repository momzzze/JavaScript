'use strict';

function main(arr) {
    let bigestNumber = arr[0];
    let result = [];
    result.push(arr[0]);


    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>=bigestNumber) {
            bigestNumber = arr[i];
            result.push(arr[i]);
        }
    }
    result.forEach(x => console.log(x));
}


//main([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//main([20, 3, 2, 15, 6, 1]);
main([1, 2, 3, 4]);