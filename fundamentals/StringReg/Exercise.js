function splitString(string, delimeter) {
    let arr = string.split(delimeter)
    for (let letter of arr) {
        console.log(letter)
    }
}

function repeatString(str, times) {
    let string = str.repeat(+times)
    console.log(string)
}

function startWith(str) {
    let string = str.split(' ')
    let result = "";
    let word = '';
    for (let letter of string) {
        word = capitalize(letter)
        result += `${word} `
    }
    console.log(result)

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
}

function captureNumbers(arr) {
    let regex = /\d+/g
    let text = arr.join(' ')
    let numbers = text.match(regex)
    console.log(numbers.join(' '))
}

function findVariable(str) {
    let pattern = /\b_([A-Za-z0-9]*)\b/g
    let numbers = str.match(pattern)
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i].substring(1, numbers[i].length)
    }
    console.log(numbers.join(','))
}

function findOccurrences(str,word) {
    let text = str.toLowerCase();
    let key=word
    let pattern = new RegExp('\\b'+key+'\\b','gi')
    let result = text.match(pattern)
    if (result!=null) {
        console.log(result.length)
    } else {
        console.log(0)
    }
    
}



splitString('One-Two-Three-Four-Five', '-')
repeatString('repeat', '5')
startWith('Was that Easy? tRY thIs onE for SiZe!')
console.log(captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']))
findVariable('The _id and _age variables are both integers.')