function printArrDelimeter(arr) {
    let sign = arr[arr.length - 1]
    let del = arr;
    del.pop()
    let result = "";
    for (let ss of del) {
        result += `${ss}${sign}`
    }
    result = result.substring(0, result.length - 1)
    return result
}


function printNElementFromArr(arr) {
    let n = +arr[arr.length - 1]
    let arr1 = arr
    arr1.pop()
    for (let i = 0; i <= arr1.length - 1; i += +n) {
        console.log(arr1[i])
    }
}

function addOrRemove() {
    let number = 1;
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            result.push(number);
        } else if (input[i] === 'remove') {
            result.pop(number);
        }
        number++;
    }
    if (result.length > 0) {
        console.log(result.join('\n'))
    } else {
        console.log('Empty');
    }
}

function rotateArray(arr) {
    let rotatedArr = arr;
    let times = rotatedArr.pop()


    for (let i = 0; i < times % rotatedArr.length; i++) {
        rotatedArr.unshift(rotatedArr.pop())
    }
    console.log(rotatedArr.join(' '))
}
function nonDecracingArray(arr) {
    let bigestNumber = arr[0];
    let result = [];
    result.push(arr[0]);


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= bigestNumber) {
            bigestNumber = arr[i];
            result.push(arr[i]);
        }
    }
    result.forEach(x => console.log(x));
}
function sortArray(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length).join('\n')
}

console.log(printArrDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '-']))
printNElementFromArr(['5', '20', '31', '4', '20', '2'])
//addOrRemove(['add', 'add', 'remove', 'add', 'add'])
//rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
let arr = ['test', 'Deny', 'omen', 'Default']
console.log(sortArray(arr))