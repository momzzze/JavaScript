'use strict';

function myfunction(size,increment) {
    let totalrows = Math.ceil(size / 2)
    let [stone,marble,lapis]=[0,0,0]
    for (var i = 1; i <= totalrows-1; i++) {
        let currentStone = (size - 2) * (size - 2)
        if (i%5===0) {
            lapis += size * size - currentStone
        } else {
            marble += size * size - currentStone
        }
        stone+=currentStone
        size-=2
    }
    let gold = size * size
    console.log(`Stone required: `+Math.ceil(stone*increment))
    console.log(`Marble required: ` + Math.ceil(marble*increment))
    console.log(`Lapis Lazuli required: ` + Math.ceil(lapis*increment))
    console.log(`Gold required: `+Math.ceil(gold*increment))
    console.log(`Final pyramid height: `+Math.floor(totalrows*increment))
}


myfunction(11, 0.75)