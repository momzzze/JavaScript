function SumFirstLast(arr) {
    let num1 = +arr[0]
    let num2 = +arr[arr.length - 1]
    return num1 + num2
}

function EvenPosition(arr) {
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result += ` ${arr[i]}`
        }
    }
    return result
}

function negativePositive(arr) {
    let result = []
    for (let num of arr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }
    console.log(result.join('\n'))
}



SumFirstLast(['20', '30', '40'])
console.log(EvenPosition(['5', '10']))
negativePositive([7, -2, 8, 9])