function solver(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i]
        let y = input[i + 1]
        let z = input[i + 2]

        if (inVolume(x, y, z)) {
            console.log('inside')
        } else {
            console.log('outside')
        }
    }
    function inVolume(x, y, z) {
        let x1 = 10, x2 = 50
        let y1 = 20, y2 = 80
        let z1 = 15, z2 = 50

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true
                }
            }
        }
        return false
    }
}

function roadRadar(params) {
    let diff = getAllowanceDiff();

    return diff <= 0 ? ''
        : diff <= 20 ? 'speeding'
            : diff <= 40 ? 'excessive speeding'
                : 'reckless driving'

    function getAllowanceDiff() {
        let currentSpeed = params[0];
        let area = params[1].toLowerCase();

        let allowances = {
            motorway: 130,
            interstate: 90,
            city: 50,
            residential: 20
        }

        return currentSpeed - allowances[area];
    }
}

function templateFormat(arr) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`)
    for (let i = 1; i <= arr.length; i++) {
        if (i % 2 === 0) {
            console.log(`<answer>\n ${arr[i - 1]}\n</answer>`)
        } else if (i % 2 !== 0) {
            console.log(`<question>\n   ${arr[i - 1]}\n</question>`)
        }
    }
    console.log(`</quiz>`)
}

function cookingNumbers(arr) {
    let number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        number = operation(arr[i], number)
        console.log(number)
    }

    function operation(word, number) {
        switch (word) {
            case 'chop': return number / 2
            case 'dice': return Math.sqrt(number)
            case 'spice': return number + 1
            case 'bake': return number * 3
            case 'fillet': return number - (number * 0.2)
            default: break;
        }
    }
}

function modifyAvg(number) {
    let numbStr = number.toString()

    let finalSum = sumDigits(numbStr)

    function sumDigits(num) {
        let counter = 0
        for (let digit of num) {
            counter += +digit
        }
        return counter
    }
    let avg = finalSum / numbStr.length
    while (avg <= 5) {
        numbStr += '9'
        finalSum = sumDigits(numbStr)
        avg = finalSum / numbStr.length
    }
    console.log(numbStr)
}

function validityChecker(arr) {

    let a1 = arr[0]
    let a2 = arr[1]
    let b1 = arr[2]
    let b2 = arr[3]

    let ato0 = distanceValid(a1, a2, 0, 0)
    let bto0 = distanceValid(b1, b2, 0, 0)
    let atob = distanceValid(a1, a2, b1, b2)

    console.log(`{${a1}, ${a2}} to {0, 0} is ${ato0 ? 'valid' : 'invalid'}`)
    console.log(`{${b1}, ${b2}} to {0, 0} is ${bto0 ? 'valid' : 'invalid'}`)
    console.log(`{${a1}, ${a2}} to {${b1}, ${b2}} is ${atob ? 'valid' : 'invalid'}`)

    function distanceValid(x1, y1, x2, y2) {
        let val = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        if (!Number.isInteger(val)) {
            return false
        } else if (Number.isInteger(val)) {
            return true
        }
    }
}

function printTreasureLocation(params) {
    for (let i = 0; i < params.length; i++) {
        let col = params[i++];
        let row = params[i];

        let location = (row >= 0 && row <= 1 && col >= 8 && col <= 9) ? 'Tokelau'
            : (row >= 1 && row <= 3 && col >= 1 && col <= 3) ? 'Tuvalu'
                : (row >= 3 && row <= 6 && col >= 5 && col <= 7) ? 'Samoa'
                    : (row >= 6 && row <= 8 && col >= 0 && col <= 2) ? 'Tonga'
                        : (row >= 7 && row <= 8 && col >= 4 && col <= 9) ? 'Cook'
                            : 'On the bottom of the ocean';

        console.log(location);
    }
}

function getSegments(params) {
    let x1 = params[0], y1 = params[1];
    let x2 = params[2], y2 = params[3];
    let x3 = params[4], y3 = params[5];

    let getDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    let firstDistance = getDistance(x1, y1, x2, y2);
    let secondDistance = getDistance(x2, y2, x3, y3);
    let thirdDistance = getDistance(x1, y1, x3, y3);

    let starAtFirstPoint = firstDistance + secondDistance;
    let starAtSecondPoint = secondDistance + thirdDistance;
    let startAtThirdPoint = thirdDistance + firstDistance;

    return starAtFirstPoint <= starAtSecondPoint && starAtFirstPoint <= startAtThirdPoint
        ? `1->2->3: ${starAtFirstPoint}`
        : starAtSecondPoint <= startAtThirdPoint
            ? `1->3->2: ${starAtSecondPoint}`
            : `2->1->3: ${startAtThirdPoint}`;
}
function processQuartzOre(params) {
    let targetThickness = params[0];

    // Define operations
    let operations = {
        cut: {
            name: 'Cut',
            action: (n) => n / 4.0,
            performedCount: 0
        },
        lap: {
            name: 'Lap',
            action: (n) => n * 0.8,
            performedCount: 0
        },
        grind: {
            name: 'Grind',
            action: (n) => n - 20,
            performedCount: 0
        },
        etch: {
            name: 'Etch',
            action: (n) => n - 2,
            performedCount: 0
        },
        xray: {
            name: 'X-ray',
            action: (n) => n + 1,
            performedCount: 0
        },
        transportingAndWashing: {
            name: 'Transporting and washing',
            action: (n) => Math.floor(n)
        }
    }

    // Loop through eac Raw material
    for (let i = 1; i < params.length; i++) {
        let currentThickness = params[i];
        shapeCrystal(targetThickness, currentThickness);
    }

    function shapeCrystal(targetThickness, currentThickness) {
        let resultingMessage = `Processing chunk ${currentThickness} microns`;
        let lastOperation = '';

        while (true) {
            // Check if it is ready
            if (Math.floor(currentThickness) == targetThickness) {
                operationChange();
                break;
            } else if (currentThickness < targetThickness) {
                operationChange();
                currentThickness = operations.xray.action(currentThickness);
                resultingMessage += '\r\nX-ray x1';
                break;
            }

            // Calculate rough operatiuons
            let cutted = operations.cut.action(currentThickness);
            let lapped = operations.lap.action(currentThickness);
            let grinded = operations.grind.action(currentThickness);
            let etched = operations.etch.action(currentThickness);

            // Choose the best operation 
            if (cutted >= targetThickness - 1 && cutted < lapped && cutted < grinded && cutted < etched) {
                currentThickness = cutted;
                operations.cut.performedCount++;
                if (lastOperation !== operations.cut.name) {
                    operationChange();
                    lastOperation = operations.cut.name;
                }
            } else if (lapped >= targetThickness - 1 && lapped < grinded && lapped < etched) {
                currentThickness = lapped;
                operations.lap.performedCount++;
                if (lastOperation !== operations.lap.name) {
                    operationChange();
                    lastOperation = operations.lap.name;
                }
            } else if (grinded >= targetThickness - 1 && grinded < etched) {
                currentThickness = grinded;
                operations.grind.performedCount++;
                if (lastOperation !== operations.grind.name) {
                    operationChange();
                    lastOperation = operations.grind.name;
                }
            } else {
                currentThickness = etched;
                operations.etch.performedCount++;
                if (lastOperation !== operations.etch.name) {
                    operationChange();
                    lastOperation = operations.etch.name;
                }
            }

            function operationChange() {
                if (lastOperation !== '') {
                    resultingMessage += `\r\n${operations[lastOperation.toLowerCase()].name} x${operations[lastOperation.toLowerCase()].performedCount}`;
                    operations[lastOperation.toLowerCase()].performedCount = 0;
                    currentThickness = operations.transportingAndWashing.action(currentThickness);
                    resultingMessage += '\r\nTransporting and washing';
                }
            }
        }

        // Print the result
        resultingMessage += `\r\nFinished crystal ${currentThickness} microns`;
        console.log(resultingMessage);
    }
}


solver([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])
console.log(roadRadar([21, 'residential']))
templateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"])
cookingNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
cookingNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
modifyAvg(101)
validityChecker([2, 1, 1, 1])
console.log(getSegments([0, 0, 2, 0, 4, 0]));