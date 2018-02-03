'use strict';

function capitalizeWords(string) {
    let arr = string.split(' ')
    for (let i = 0; i < arr.length;i++) {
        arr[i] = arr[i].toLowerCase();
    }
    for (var i = 0; i < arr.length; i++) {
        let sub=arr[i].substring(1,arr[i].length)
        arr[i] = arr[i].charAt(0).toUpperCase() + sub
    }
    return arr.join(' ')
}

console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'))

