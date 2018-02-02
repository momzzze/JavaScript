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


/*function extractText(str) {

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
}*/

/*function name(arr) {
    let towns=[]
    let sum=0
    for (let index = 0; index < arr.length; index++) {
       let tokens= arr[index].split('|').filter(a => a !=='')
        towns.push(tokens[0].trim())
        sum+=Number(tokens[1].trim())
    }
    console.log(towns.join(', '))
    console.log(sum)
}*/


/*function name(arr) {
    let products=arr.filter((str,i)=>i%2===0).join(', ')
    let sum=arr.filter((str,i)=>i%2!==0).map(str=>Number(str)).reduce((a,b)=>a+b)
    console.log(`You purchased ${products} for a total sum of ${sum}`)
}*/

function name(arr) {
    let finalResult=[]
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split('@')
        let domains=token[1].split('.')
        let result=token[0]+'.'
       for (let str of domains) {
         result+=str[0] 
       }
        finalResult.push(result)       
        
    }console.log(finalResult.join(', '))
}
name(['peshoo@gmail.com', 'todor_43@mail.dir.bg','foo@bar.com'])