'use strict';

function main(input) {
    let number = 1;
    let result=[];
    for (let i = 0; i < input.length; i++) {
        if (input[i]==='add') {
            result.push(number);
        } else if(input[i]==='remove') {
            result.pop(number);
        }
        number++;
    }
    if (result.length>0) {
        console.log(result.join('\n'))
    } else {
        console.log('Empty');
    }

}
main(['add','add','add','add'])