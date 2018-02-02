'use strict';

//function letters(str) {
   // for (let i = 0; i < str.length; i++) {
     //   console.log(`str[${i}] -> ${str[i]}`)
  //  }
//}
//letters("SoftUni");



//function reverseStrings(str) {
   // console.log(str.join('').split('').reverse().join(''))
//}


//reverseStrings(["SoftUni","Pesho","Gosho"])
//let str="JS JS JS"
//console.log(str.replace(/JS/g,"C#"));

//function countOccurrences(target,str) {
  // let counter=0
   //while (true) {
    //   let startIndex=str.indexOf(target)
    //   if (startIndex<0) {
    //       break
    //   }
    //   counter++
     //  str=str.substr(startIndex+1)
   //}
//   console.log(counter)
//}


function extractText(str) {
    let result=[]
    
    while (true) {
        let start=str.indexOf('(')
        if (start<0) {
            break;
        }
        let end=str.indexOf(')')
        if (end<0||end<start) {
            break;
        }
        result.push(str.substring(start+1,end))
        str=str.substring(end+1)
    }
    console.log(result.join(', '))
}
