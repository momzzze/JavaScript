'use strict';

function solution(str) {
    let regex = /^<message((?:\s[a-z]+="[A-Za-z0-9 .]+")+)>((?:.|\n)+)<\/message>$/.exec(str)
    if (regex !== null) {
        let to = /\bto="([A-Za-z0-9 .]+)"/.exec(regex[1])[1]
        let from = /\bfrom="([A-Za-z0-9 .]+)"/.exec(regex[1])[1]
        if (to!==null&&from!==null) {
            let result = `<article>\n  <div>From: <span class="sender">${from}</span></div>\n`
            result += `  <div>To: <span class="recipient">${to}</span></div>\n`
            result += `  <div>\n`
            let messages = regex[2].split('\n')
            for (let i = 0; i < messages.length; i++) {
                result+=`    <p>${messages[i]}</p>\n`
            }
            result += `  </div>\n`
            result += `</article>`
            console.log(result)
        } else {
            console.log('Missing attributes')
        }
    } else {
        console.log("Invalid message format")
    }
}

solution(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);


