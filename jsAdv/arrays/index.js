//---------------------------------------------------------------------1
// function solve(arr, sign) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (i != arr.length - 1) {
//       result += arr[i] + sign;
//     } else {
//       result += arr[i];
//     }
//   }

//   console.log(result);
// }

// solve(["One", "Two", "Three", "Four", "Five"], "-");
//----------------------------------------------------------------------2
// function solve(arr, step) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += step) {
//     result.push(arr[i]);
//   }
//   return result
// }

// //console.log(solve(["dsa", "asd", "test", "tset"], 2));
// solve(["1", "2", "3", "4", "5"], 6);
//---------------------------------------------------------------------3
// function solve(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//       case "add":
//         result.push(i + 1);
//         break;
//       case "remove":
//         result.pop();
//         break;

//       default:
//         break;
//     }
//   }
//   if (result.length == 0) {
//     console.log("Empty");
//     return;
//   }
//   result.forEach((e) => {
//     console.log(e);
//   });
// }

// solve(["add", "add", "remove", "add", "add"]);
// //solve(["remove", "remove", "remove"]);
//------------------------------------------------------------------------4

// function solve(arr, n) {
//   let realRotations = n % arr.length;
//   for (let i = 0; i < realRotations; i++) {
//     let el = arr.pop();
//     arr.unshift(el);
//   }
//   console.log(arr.join(' '));
// }

// solve(["Banana", "Orange", "Coconut", "Apple"], 15);

//------------------------------------------------------------------------5
// function solve(numArr) {
//   let resultArr = aggregate(numArr, reducer, []);

//   function reducer(acc, el) {
//     if (acc.length === 0 || el >= acc[acc.length - 1]) {
//       acc.push(el);
//     }
//     return acc;
//   }
//   function aggregate(arr, reducerFunc, initialValue) {
//     for (let index = 0; index < arr.length; index++) {
//       const el = arr[index];
//       initialValue = reducerFunc(initialValue, el);
//     }
//     return initialValue;
//   }
//   return resultArr;
// }

// solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//-------------------------------------------------------------------------------6
// function solve(arr) {
//   arr.sort((a, b) => a.localeCompare(b));
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1}.${arr[i]}`);
//   }
// }
// solve(["John", "Bob", "Christina", "Ema"]);
//-------------------------------------------------------------------------------7

// function solve(arr) {
//   arr.sort((a, b) => a - b);
//   let result = [];

//   while (arr.length > 0) {
//     result.push(arr.shift());
//     if (arr.length !== 0) {
//       result.push(arr.pop());
//     }
//   }

//   return result;
// }
// solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//-------------------------------------------------------------------------------8
// function solve(arr) {
//   let twoCriteriaSort = (a, b) => a.length - b.length || a.localCompare(b);
//   let result = arr.sort(twoCriteriaSort);
//   console.log(result.join('\n'));
// }

// function sortArray(input) {
//   input.sort(twoCriteriaSort);
//   input.forEach(el => console.log(el));

//   function twoCriteriaSort(cur, next) {
//     if (cur.length === next.length) {
//       return cur.localeCompare(next);
//     }
//     return cur.length - next.length;
//   }
// }


// sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//-------------------------------------------------------------------------------9

function solve(){
  
}