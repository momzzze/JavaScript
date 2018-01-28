'use strict';

function LeapYear(year) {
    let ifLeapYear =(year%4==0&&year%100!=0)||(year%400==0)
    console.log(ifLeapYear ? "yes" : "no");
}
LeapYear(2000);