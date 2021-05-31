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

// function solve(matrix) {
//   let magicSum = Number.MIN_SAFE_INTEGER;
//   let isMagicMatrix = true;
//   for (let row = 0; row < matrix.length; row++) {
//     // let colSum = 0;
//     let sum = 0;
//     for (let col = 0; col < matrix[row].length; col++) {
//       let el = matrix[row][col];
//       sum += el;
//       // let colEl = matrix[col][row];
//       // colSum += colEl;
//     }
//     if (magicSum === Number.MIN_SAFE_INTEGER) {
//       magicSum = sum;
//     }
//     if (sum !== magicSum) {
//       isMagicMatrix = false;
//     }
//   }

//   for (let col = 0; col < matrix[0].length; col++) {

//     let sum = 0;

//     for (let row = 0; row < matrix.length; row++) {
//       let el = matrix[row][col];
//       sum += el;
//     }
//     if (sum !== magicSum) {
//       isMagicMatrix = false;
//     }

//   }
//   return isMagicMatrix;
// }

// console.log(solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
//---------------------------------------------------------------10
function solve(movesArray) {
  let board = [
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']
  ];
  let isPlayerX = true;

  for (let index = 0; index < movesArray.length; index++) {
    let movesPair = movesArray[index].split(' ').map(x => Number(x));
    let row = movesPair[0];
    let col = movesPair[1];

    if (board[row][col] !== 'false') {
      console.log(`This place is already taken. Please choose another!`);
      continue;
    }
    board[row][col] = isPlayerX ? 'X' : 'O';
    isPlayerX = !isPlayerX;
    let gameEnded = hasGameEnded(board);
    if (gameEnded) {
      break;
    }
  }

  for (let row = 0; row < board.length; row++) {
    console.log(board[row].join('\t'));

  }


  function hasGameEnded(board) {
    for (let row = 0; row < board.length; row++) {

      let isSameX = board[row].every(x => x === 'X');
      let isSameO = board[row].every(x => x === 'O');

      if (isSameX || isSameO) {
        console.log(`Player ${isSameX ? 'X' : 'O'} wins!`);
        return true;

      }
    }

    for (let col = 0; col < board.length; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== 'false') {
        console.log(`Player ${board[col][0]} wins!`);
        return true;
      }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 'false') {
      console.log(`Player ${board[0][0]} wins!`);
      return true;
    }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== 'false') {
      console.log(`Player ${board[2][0]} wins!`);
      return true;
    }
    if (board[0].every(x => x !== 'false') && board[1].every(x => x !== 'false') && board[2].every(x => x !== 'false')) {
      console.log(`The game ended! Nobody wins :(`);
      return true;
    }
    return false;
  }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);