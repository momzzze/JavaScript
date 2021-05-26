//-------------------------------1---------------------------------------
// function fruit(fruit, weight, price) {
//     let weightInKg = (weight / 1000);
//     let money = weightInKg * price;

//     return `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
// }


// console.log(fruit('orange', 2500, 1.80));


//--------------------------------2---------------------------------------
// function solve(a, b) {
//     if (a == 0)
//     return b;
//     if (b == 0)
//     return a;

//     if (a == b)
//         return a;

//     if (a > b)
//         return solve(a-b, b);
//     return solve(a, b-a);
// }
// console.log(solve(15,5));

//-----------------------------------3---------------------------------------
// function solve(num) {
//     let numString = num.toString();
//     let status = true;
//     let sum = Number(numString[0]);
//     for (let i = 0; i < numString.length - 1; i++) {
//         const element = numString[i];
//         const nextElement = numString[i + 1];
//         if (element !== nextElement) {
//             status = false;
//         }

//         sum += Number(nextElement);
//     }

//     console.log(status);
//     console.log(sum);
// }
// console.log(solve(1234));
//------------------------------------4---------------------------------------
// function solve(steps, footPrintLength, speed) {
//     let speedInMeters = speed * 1000;
//     let length = steps * footPrintLength;
//     let time = length / speedInMeters;
//     let breaks = Math.floor(length / 500);
//     let hr = Math.floor(time % 60);
//     let min = Math.floor((time * 60) + breaks);
//     let sec = Math.round(((time * 60) % 1) * 60);
//     if (hr < 10) {
//         hr = '0' + hr;
//     }
//     if (min < 10) {
//         min = '0' + min
//     }
//     if (sec < 10) {
//         sec = '0' + sec
//     }
//     console.log(`${hr}:${min}:${sec}`);

// }

// console.log(solve(2564, 0.7, 5.5));
//---------------------------------------5------------------------------------
// function solver(currentSpeed, area) {
//     let limit;
//     let status;


//     switch (area) {
//         case "motorway":
//             limit = 130;
//             if (currentSpeed <= limit) {
//                 return `Driving ${currentSpeed} km/h in a ${limit} zone`;
//             }
//             if (currentSpeed > limit) {
//                 if ((currentSpeed - limit) <= 20) {
//                     status="speeding";
//                 }
//                 if ((currentSpeed - limit) > 20 && (currentSpeed - limit) <= 40) {
//                     status="excessive speeding";
//                 } 
//                 if((currentSpeed - limit)>40){
//                     status="reckless driving";
//                 }
//                 return `The speed is ${(currentSpeed - limit)} km/h faster than the allowed speed of ${limit} - ${status}`;
//             }
//             break;
//         case "interstate":
//             limit = 90;
//             if (currentSpeed <= limit) {
//                 return `Driving ${currentSpeed} km/h in a ${limit} zone`;
//             }
//             if (currentSpeed > limit) {
//                 if ((currentSpeed - limit) <= 20) {
//                     status="speeding";
//                 }
//                 if ((currentSpeed - limit) > 20 && (currentSpeed - limit) <= 40) {
//                     status="excessive speeding";
//                 } 
//                 if((currentSpeed - limit)>40){
//                     status="reckless driving";
//                 }
//                 return `The speed is ${(currentSpeed - limit)} km/h faster than the allowed speed of ${limit} - ${status}`;
//             }
//             break;
//         case "city":
//             limit = 50;
//             if (currentSpeed <= limit) {
//                 return `Driving ${currentSpeed} km/h in a ${limit} zone`;
//             }
//             if (currentSpeed > limit) {
//                 if ((currentSpeed - limit) <= 20) {
//                     status="speeding";
//                 }
//                 if ((currentSpeed - limit) > 20 && (currentSpeed - limit) <= 40) {
//                     status="excessive speeding";
//                 } 
//                 if((currentSpeed - limit)>40){
//                     status="reckless driving";
//                 }
//                 return `The speed is ${(currentSpeed - limit)} km/h faster than the allowed speed of ${limit} - ${status}`;
//             }
//             break;
//         case "residential":
//             limit = 20;
//             if (currentSpeed <= limit) {
//                 return `Driving ${currentSpeed} km/h in a ${limit} zone`;
//             }
//             if (currentSpeed > limit) {
//                 if ((currentSpeed - limit) <= 20) {
//                     status="speeding";
//                 }
//                 if ((currentSpeed - limit) > 20 && (currentSpeed - limit) <= 40) {
//                     status="excessive speeding";
//                 } 
//                 if((currentSpeed - limit)>40){
//                     status="reckless driving";
//                 }
//                 return `The speed is ${(currentSpeed - limit)} km/h faster than the allowed speed of ${limit} - ${status}`;
//             }
//             break;
//         default:
//             break;
//     }
// }

// console.log(solver(200,'motorway'));
// console.log(solver(130,'motorway'));
// console.log(solver(120, 'interstate'));
// console.log(solver(21,'residential'))
//-------------------------------------------6-------------------------------------
// function solver(num, op1, op2, op3, op4, op5) {
//     num=applyOperation(num,op1);
//     console.log(num);
//     num=applyOperation(num,op2);
//     console.log(num);
//     num=applyOperation(num,op3);
//     console.log(num);
//     num=applyOperation(num,op4);
//     console.log(num);
//     num=applyOperation(num,op5);
//     console.log(num);

//     function applyOperation(num, op) {
//         switch (op) {
//             case 'chop':
//                 num /= 2;
//                 break;

//             case 'dice':
//                 num = Math.sqrt(num);
//                 break;

//             case 'spice':
//                 num++;
//                 break;

//             case 'bake':
//                 num *= 3;
//                 break;

//             case 'fillet':
//                 num *= 0.8;
//                 break;

//             default:
//                 break;
//         }
//         return num;
//     }
// }
// solver('32', 'chop', 'chop', 'chop', 'chop','chop');
//---------------------------------7----------------------------------------
// function solve(x1,y1,x2,y2) {
    
    
 
//     function distance(x1, y1, x2, y2) {
//         let distH = x1 - x2;
//         let distY = y1 - y2;
//         return Math.sqrt(distH**2 + distY**2);
//     }
 
//     if (Number.isInteger(distance(x1, y1, 0, 0))) {
//         console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
//     }
 
//     if (Number.isInteger(distance(x2, y2, 0, 0))) {
//         console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
//     } else {
//         console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
//     }
 
//     if (Number.isInteger(distance(x1, y1, x2, y2))) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }

// solve(2,1,1,1);

//------------------------------------8----------------------------------
// function solve(numbs) {
//     let numbers=numbs.split(" ")
//     let re=/\w+/g;
//     let str=numbs.match(re);
//     toUpper = function(x){ 
//         return x.toUpperCase();
//       };
//       str = str.map(toUpper);

//       console.log(str.join(', '))

// }

// console.log(solve("Hi, how are you?"))
// console.log(solve("hello"))