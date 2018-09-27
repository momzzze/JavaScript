function TriangleOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${'*'.repeat(i)}`)
    }
    for (let i = n - 1; i > 0; i--) {
        console.log(`${'*'.repeat(i)}`)

    }
}

function SquareOfStars(n) {
    for (let i = 0; i < n; i++) {
        console.log(`${'* '.repeat(n)}`)
    }
}

function Palindrome(str) {
    let rev = str.split('').reverse().join("")
    if (str === rev) {
        return true
    } else {
        return false
    }
}


function DayOfWeek(word) {
    let result;
    switch (word) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;

        default: result = 'error';
            break;
    }
    return result;
}

function Calculator(a, b, operator) {

    let add = (a, b) => a + b
    let sub = (a, b) => a - b
    let multiply = (a, b) => a * b
    let div = (a, b) => a / b

    let result = operator === '+' ? add(a, b)
        : operator === '-' ? sub(a, b)
            : operator === '*' ? multiply(a, b)
                : operator === '/' ? div(a, b)
                    : 'Unrecognised operation'

    return result
}

function AggregateElements(arr) {

    function sum() {
        let resSum=0;
       for (let i = 0; i < arr.length; i++) {
           resSum+=arr[i]
           
       }
        return resSum
    }
    function sumA() {
        let resSum=0;
        arr.forEach(element => {
            resSum+=1/element
        });
        return resSum
    }
    function concat() {
        let resSum=""
        arr.forEach(element => {
            resSum+=element
        });
        return resSum
    }
    console.log(sum())
    console.log(sumA())
    console.log(concat())
}




TriangleOfStars(2)
SquareOfStars(5)
console.log(Palindrome('abba'))
console.log(DayOfWeek('Monday'))
console.log(DayOfWeek('Monffsdday'))
console.log(Calculator(4, 5, '+'))
AggregateElements([1, 2, 3])