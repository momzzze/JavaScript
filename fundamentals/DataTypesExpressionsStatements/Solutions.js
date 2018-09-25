function Hello(name){
    console.log(`Hello, ${name}, I am JavaScript!`)
}
function AreaAndPerimeter(num1,num2){
    console.log(num1*num2)
    console.log(2*(num1+num2))
}


function DistanceOverTime(arr){
    let speedOne=arr[0]
    let speedTwo=arr[1]
    let time=arr[2]
    //S=V*T
    let sOne=+speedOne*(+time/3600)*1000
    let sTwo=+speedTwo*(+time/3600)*1000
    console.log(Math.abs(sOne-sTwo))
}

function DistanceIn3D(arr){
    let x=Math.abs(arr[0]-arr[3])
    let y=Math.abs(arr[1]-arr[4])
    let z=Math.abs(arr[2]-arr[5])
    let counter=0
    if(x!==0){
        counter+=Math.pow(x,2)
    }
    if(y!==0){
        counter+=Math.pow(y,2)
    }
    if(z!==0){
        counter+=Math.pow(z,2)
    }
    console.log(Math.sqrt(counter))
}

function GradsToDegrtees(number){
    let grads = +number
 
    grads = grads % 400
    console.log(grads)
    if (grads < 0) {
        grads += 400
    }
    
    let degrees = grads / 400 * 360
    console.log(degrees)
}

function CompundInterest(arr){
    let p=+arr[0]
    let i=+arr[1]/100
    let n=12/arr[2]
    let t=arr[3]
    let total=p*Math.pow((1+(i/n)),(n*t))
    console.log(total.toFixed(2))
}

function Rounding(arr){
    let number=+arr[0]
    let precision=arr[1]

    if(precision>15){
        precision=15
    }

    console.log(parseFloat(number.toFixed(precision)))
}


function ImperialUnits(number){
    let foot=Math.floor(number/12)
    let inch=number%12
    console.log(`${foot}'-${inch}"`)
}

function NowPlaying(arr){
    console.log(`Now Playing: ${arr[1]} `+ "-"+` ${arr[0]} [${arr[2]}]`)
}

function ComposeTag(arr){
    console.log(`<img src="${arr[0]}" alt="${arr[1]}">`)
}

function BinaryToDeci(numb){
    let number=parseInt(numb,2)
    console.log(number)
}

function AssignProperties(arr){
    let obj={}
    obj[arr[0]]=arr[1]
    obj[arr[2]]=arr[3]
    obj[arr[4]]=arr[5]
    return obj
}

function LastMonth(arr){
    let date=new Date(arr[2],arr[1]-1)
    date.setDate(0)
    console.log(date.getDate())
}

function BiggestOf3(arr){
  console.log(Math.max(+arr[0],+arr[1],+arr[2]))
}

function isPointInside(params) {
    let pX = params[0]
    let pY = params[1]

    let xMin = params[2]
    let xMax = params[3]
    let yMin = params[4]
    let yMax = params[5]

    return pX <= xMax && pX >= xMin && pY <= yMax && pY >= yMin
        ? 'inside'
        : 'outside'
}

function printOddNumbersTo(max) {
    for(let i = 1; i <= max; i += 2) {
        console.log(i);
    }
}


function TriangleOfDollars(n){
    for (let i = 1; i <= n; i++) {
        console.log(`${'$'.repeat(i)}`)        
    }
}


function getPrice(params) {
    let title = params[0].toLowerCase();
    let day = params[1].toLowerCase();

    if(title == 'the godfather') {
        switch (day) {
            case 'monday': return 12;
            case 'tuesday': return 10;
            case 'wednesday': return 15;
            case 'thursday': return 12.50;
            case 'friday': return 15;
            case 'saturday': return 25;
            case 'sunday': return 30;
            default: return 'error';
        }
    } else if(title == 'schindler\'s list') {
        switch (day) {
            case 'monday': return 8.50;
            case 'tuesday': return 8.50;
            case 'wednesday': return 8.50;
            case 'thursday': return 8.50;
            case 'friday': return 8.50;
            case 'saturday': return 15;
            case 'sunday': return 15;
            default: return 'error';
        }
    } else if(title == 'casablanca') {
        switch (day) {
            case 'monday': return 8;
            case 'tuesday': return 8;
            case 'wednesday': return 8;
            case 'thursday': return 8;
            case 'friday': return 8;
            case 'saturday': return 10;
            case 'sunday': return 10;
            default: return 'error';
        }
    } else if(title == 'the wizard of oz') {
        switch (day) {
            case 'monday': return 10;
            case 'tuesday': return 10;
            case 'wednesday': return 10;
            case 'thursday': return 10;
            case 'friday': return 10;
            case 'saturday': return 15;
            case 'sunday': return 15;
            default: return 'error';
        }
    } else {
        return 'error';
    }
}

function solveQuad(a, b, c) {
    let discriminant = b * b - 4 * a * c

    if(discriminant < 0) {
        console.log('No');
    } else if(discriminant == 0) {
        console.log((b * -1)  / (2 * a))
    } else {
        let x1 = ((b * -1) + Math.sqrt(discriminant)) / (2 * a)
        let x2 = ((b * -1) - Math.sqrt(discriminant)) / (2 * a)

        console.log(x2)
        console.log(x1)
    }
}


function multiplicationTable(n) {
    let result = "<table border='1'>\n\t<tr><th>x</th>"

    for(let i = 1; i <= n; i++) {
        result += `<th>${i}</th>`
    }

    result += "</tr>\n";

    for(let i = 1; i <= n; i++) {
        result += `\t<tr><th>${i}</th>`

        for(let j = 1; j <= n; j++) {
            result += `<td>${i * j}</td>`
        }

        result += "</tr>\n"
    }

    result += "</table>"

    return result
}

function drawFourSquares(n) {
    let square = ''
    let linesCount = n % 2 == 0 ? n - 1 : n
    let middle = Math.ceil(linesCount * 1.0 / 2)
    let innerCharsCount = n - 2

    for(let i = 1; i <= linesCount; i++) {
        let isBorder = i == 1 || i == linesCount || i == middle
        let divisor = isBorder ? '+' : '|'
        let fillingChars = isBorder ? '-' : ' '

        square += divisor + fillingChars.repeat(innerCharsCount) + divisor + fillingChars.repeat(innerCharsCount) + divisor + '\n'
    }

    console.log(square)
}


function calendar(params) {
    let day = params[0];
    let month = params[1];
    let year = params[2];
    let date = new Date(year, month - 1, day);
    let firstDayInCurrentMonth = new Date(year, month - 1, 1).getDay();
    let previousMonthLastDay = new Date(year, month - 1, 0).getDate();

    let result = '<table>\r\n  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\r\n  <tr>';

    // Add Previous Month
    let prevMonthStartValue = previousMonthLastDay - firstDayInCurrentMonth + 1;
    for (let i = prevMonthStartValue; i <= previousMonthLastDay; i++) {
        result += `<td class="prev-month">${i}</td>`;
    }

    let currentValue = 1;

    // Current month - Finish first row
    for (let i = firstDayInCurrentMonth; i <= 6; i++) {
        if (currentValue == day) {
            result += `<td class="today">${currentValue++}</td>`;
        } else {
            result += `<td>${currentValue++}</td>`;
        }
    }

    // Current month - print the rest
    let currentMonthLastDay = new Date(year, month, 0).getDate();
    let rowCount = 0;
    while (currentValue <= currentMonthLastDay) {
        if (rowCount++ % 7 == 0) {
            result += '</tr>\r\n  <tr>'
        }

        if (currentValue == day) {
            result += `<td class="today">${currentValue++}</td>`;
        } else {
            result += `<td>${currentValue++}</td>`;
        }
    }

    // Next month - finish the row
    currentValue = 1;
    while (rowCount++ % 7 != 0) {
        result += `<td class="next-month">${currentValue++}</td>`;
    }

    result += '</tr>\r\n</table>';
    return result;
}

Hello('Pesho')
AreaAndPerimeter(1,3)
DistanceOverTime([0,60,3600])
DistanceIn3D([1,1,0,5,4,0])
GradsToDegrtees(-50)
CompundInterest([1500,4.3,3,6])
Rounding([3.1415926535897932384626433832795, 2])
ImperialUnits(36)
NowPlaying(['Number One', 'Nelly', '4:09'])
ComposeTag(['smiley.gif', 'Smiley Face'])
BinaryToDeci('00001001')
console.log(AssignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']))
LastMonth(['17', '3', '2002'])
BiggestOf3([2,-7,3])
console.log(isPointInside([8, -1, 2, 12, -3, 3]));
printOddNumbersTo(40)
TriangleOfDollars(4)