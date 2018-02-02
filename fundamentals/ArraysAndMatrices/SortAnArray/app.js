'use strict';

function sortArray(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).sort((a,b)=>a.length-b.length).join('\n')
}
let arr = ['test', 'Deny', 'omen', 'Default']
console.log(sortArray(arr))
   