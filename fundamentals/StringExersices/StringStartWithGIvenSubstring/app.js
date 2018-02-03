'use strict';

function stringChecker(str,word) {
    let length = word.length
    if (str.substring(str.length-length,str.length)==word) {
        return  true
    } else {
      return  false
    }
}        

//stringChecker('How have you been?', 'how')
console.log(stringChecker('The quick brown fox…','The quick brown fox…'))