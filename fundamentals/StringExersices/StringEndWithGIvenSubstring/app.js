'use strict';

function endStingWith(str,word) {
    let start = Number(str.length - word.length)
    if (str.substring(start,word.length+start)==word) {
        return true
    } else {
        return false
    }
}


console.log(endStingWith('The new iPhone has no headphones jack.','o headphones jack.'))