'use strict';

function mealProblem(meals,commands) {
    let mealsEaten = 0;

    let actions = {
        Serve: () => {
            if (meals.length>0) {
                console.log(`${meals.pop()} served!`)
            }
        },
        Add: ([meal]) => {
            if (meal!='') {
                meals.unshift(meal)
            } 
            },
           
        Shift: ([meal1, meal2]) => {
            if (meal1 && meal2 && meal1 >= 0 && meal2 < meals.length && meal1 < meal2) {
                let rotationHelprer = meals[meal1]
                meals[meal1] = meals[meal2]
                meals[meal2]=rotationHelprer
            }
           
        },
        Eat: () => {
            if (meals.length>0) {
                console.log(`${meals.shift()} eaten`)
            }
        },
        Consume: ([start, end])=> {
            if (start && end && start >= 0 && end < meals.length && start < end) {
                let portionsCount = end - start+1
                meals.splice(start,portionsCount)
                mealsEaten+=portionsCount
                console.log("Burp!")
            }
        },        
        End: () => {
            if (meals.length>0) {
                console.log(`Meals left: ${meals.join(', ')}`)
                mealsEaten++
            } else {
                console.log('The food is gone')
            }
            console.log(`Meals eaten: ${mealsEaten}`)
        }
    }


    for (let comArgs of commands) {
        let commandParams = comArgs.split(' ')
        let action = commandParams.shift(' ')
        if (actions[action]) {
            actions[action](commandParams)
            if (action=="End") {
                break
            }
        }

    }
}
let input1 = [['chicken', 'steak', 'eggs'], ['Serve', 'Eat', 'End', 'Consume 0 1']]
let input2 = [['fries', 'fish', 'beer', 'chicken','beer', 'eggs'],['Add spaghetti','Shift 0 1','Consume 1 4','End']]
//mealProblem(input1);
mealProblem(input2);