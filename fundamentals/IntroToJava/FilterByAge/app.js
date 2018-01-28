'use strict';
function Filter(minAge,namefp,agefp,namesp,agesp) {
    if (agefp >= minAge) {
        console.log("{ name: '"+namefp+"', age: "+agefp+" }")
    }
    if (agesp >= minAge) {
        console.log("{ name: '" + namesp + "', age: " + agesp + " }")
    }
}

Filter(12, 'Ivan', 15, 'Asen', 12)