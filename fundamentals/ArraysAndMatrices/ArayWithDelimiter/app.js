'use strict';

function delimiter(input) {
    let delimiter = input[input.length - 1];
    input.pop();
    let result = "";
    for (var i = 0; i < input.length; i++) {
        if (i == 0) {
            result += input[i];
        } else {
            result += delimiter + input[i];
        }
    }
    console.log(result);
}
delimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);