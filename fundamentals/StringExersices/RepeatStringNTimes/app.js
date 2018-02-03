'use strict';

function repeatString(str, n) {
    let result = "";
    for (var i = 0; i < n; i++) {
        result=result.concat(str)
    }
    console.log(result)
}


repeatString('magic is real', 3)
//repeatString('repeat', 5)