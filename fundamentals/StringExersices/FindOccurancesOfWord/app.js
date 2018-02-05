'use strict';

function findOccurrences(str,word) {
    let text = str.toLowerCase();
    let key=word
    let pattern = new RegExp('\\b'+key+'\\b','gi')
    let result = text.match(pattern)
    if (result!=null) {
        console.log(result.length)
    } else {
        console.log(0)
    }
    
}


findOccurrences('How do you plan on achieving that? How? How can you even think of that? ','how') 
