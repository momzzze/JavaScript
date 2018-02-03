'use strict';

function splitString(str,delimiter) {
    let stringArray = []
    stringArray = str.split(delimiter)
    for (let word of stringArray) {
        console.log(word)
    }
}



//splitString('One - Two - Three - Four - Five', '-')
splitString('http://platform.softuni.bg','.')