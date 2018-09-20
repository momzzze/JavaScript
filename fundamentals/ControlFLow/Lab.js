
//1
function Sum(a, b) {
    return a * b
}

//-----------------------

//2

function BoxesAndBottles(numberOfBottles, capacityOfBoxes) {
    return Math.ceil(numberOfBottles / capacityOfBoxes)
}

function LeapYear(year) {
    let isLeap = false;
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        isLeap = true;
    }
    console.log(isLeap ? 'yes' : 'no')
}


function CircleArea(r) {
    console.log(Math.pow(r, 2) * Math.PI)
    console.log(Math.round(Math.pow(r, 2) * Math.PI * 100) / 100)
}

function TriangleArea(a, b, c) {
    let s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

function Cone(radius,height){
    console.log(`volume = ${Math.PI*Math.pow(radius,2)*(height/3)}`)
    console.log(`area = ${Math.PI*radius*(radius+Math.sqrt(Math.pow(height,2)+Math.pow(radius,2)))}`)
}

function OddEven(number){
    let isEven=number%2;
    if(isEven==0){
        console.log('even')
    }else if(isEven==Math.round(isEven)){
        console.log('odd')
    }else{console.log('invalid')}
    
}

function FruitOrVegetable(word){
   let fruits=['banana','apple','kiwi','cherry','lemon','grapes','peach']  
   let vege=['tomato','cucumber','pepper','onion','garlic','parsley']
   if(fruits.includes(word)){
       console.log('fruit')
   }else if(vege.includes(word)){
    console.log('vegetable')
   }else{
    console.log('unknown')
   }
}

function ColorFulNumbers(n){
    let html='<ul>\n'
    for (let i = 1; i <= n; i++) {
        let color='blue';
        if(i%2!=0){
            color='green'            
        }
        html+= `<li><span style='color:${color}'>${i}</span></li>\n`
    }
    html+= '</ul>'
    return html
}

function ChessBoard(n){
    let html='<div class="chessboard">\n'
    let black='black'
    let white='white'
    for (let i = 1; i <= n; i++) {      
        html+='<div>\n'
        if(i%2==1){
            for (let k = 1; k <= n; k++) {
                if(k%2==0){
                    html+=`<span class="${white}"></span>\n`
                }else{
                    html+=`<span class="${black}"></span>\n`
                }            
            }
        }else{
            for (let k = 1; k <= n; k++) {
                if(k%2==0){
                    html+=`<span class="${black}"></span>\n`
                }else{
                    html+=`<span class="${white}"></span>\n`
                }            
            }
        }
        
        html+='</div>\n'
    }
    html+='</div>'
    return html
}


function BinaryLog(array){
    for (let number of array) {
        console.log(Math.log2(+number))
    }   
}


function PrimeNumberChecker(num){
    if(num>0){
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;}
    else{
        return false
    }
}

console.log(Sum(3, 4))
console.log(BoxesAndBottles(15, 7))
LeapYear(1900)
CircleArea(5)
console.log(TriangleArea(2,3.5,4))
Cone(3,5)
OddEven(1,5)
FruitOrVegetable('banana')
console.log(ColorFulNumbers(10))
console.log(ChessBoard(3))
BinaryLog([256])
console.log(PrimeNumberChecker(-5))