
function solve(arr) {
    let closure=(function () {
        let str=''
        return commands={
            append:(s)=>str+=s,
            removeStart:(n)=>str=str.substring(n),
            removeEnd:(n)=>str=str.substring(0,str.length-n),
            print:()=>console.log(str)

        }
        return function (arr) {

        }
    })()
    for (let obj of arr) {
        let [comm,value]=obj.split(' ')
        closure[comm](value)
    }
}



function solve(arr) {
    return Math.max.apply('',arr)
}




function getArticleGenerator(articles) {

    return function () {
        if(articles.length>0) {
            $('#content').append($(`<article>${articles.shift()}</article>`))
        }
    }
}

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long."
];
let showNext = getArticleGenerator(articles);



function add(num) {

    let sum=num;

    function increase(num2){
        sum+=num2;
        return increase
    }

    increase.toString=function () {
        return sum
    }
    return increase
}

function sortArray(inputArr,method) {

        let ascendingComparator=function (a,b) {
            return a-b
        };
        let descendingComparator=function (a,b) {
            return b-a
        };

        let sortingStrategies={
            'asc':ascendingComparator,
            'desc':descendingComparator
        }
        return inputArr.sort(sortingStrategies[method])
    }



function myFunc() {
    var firstArgument=arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        var type=typeof obj;
        console.log(type+':'+obj)
        if(!summary[type]){
            summary[type]=1;
        }else {
            summary[type]++;
        }
    }
    let sortedTypes=[]

    for(let currentTYpe in summary){
        sortedTypes.push([currentTYpe,summary[currentTYpe]])
    }

}
function argumentInfo() {
    let map = new Map();

    for (let arg of arguments) {
        let type = typeof(arg);
        if (!map.has(type)) {
            map.set(type, 0);
        }
        map.set(type, map.get(type)+1);
        console.log(`${type}: ${arg}`)
    }

    [...map.entries()].sort((a,b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}


function personDescribing(name,age,weight,height) {
    let result = {}
    let bmi = Math.round(weight / Math.pow(height / 100,2))


    let status = bmi <= 18.5 ? "underweight" :
        bmi > 18.5 && bmi <= 24.9 ? "normal" :
            bmi >= 24.9 && bmi <= 29.9 ? "overweight" : "obese"

    if(status !== "obese"){
        result={"name":name,
            "personalInfo":{"age":age,"weight":weight,"height":height},
            "BMI":bmi,
            "status":status
        }
    }else{
        result={"name":name,
            "personalInfo":{"age":age,"weight":weight,"height":height},
            "BMI":bmi,
            "status":status,
            "recommendation":'admission required'
        }
    }
    return result
}



//console.log(personDescribing('Peter', 29, 75, 182))

function monkeyPatcher(command) {
    let commands={
        upvote:()=>{this.upvotes++},
        downvote:()=>{this.downvotes++},
        score:()=>{
            let rating='new';
            let currentUpVotes=this.upvotes;
            let currentDownVotes=this.downvotes;
            let totalVotes=currentUpVotes+currentDownVotes;
            let totalScore=currentUpVotes+currentDownVotes
            if(totalVotes>50){
                obfuscatePost()
            }
            return `[${currentUpVotes}, ${currentDownVotes}, ${totalScore},${rating}]`
        }
    }
    commands[command]()
}


let post={id:'3',author:'email',content:'wazaaaaa',upvotes:100,downvotes:100};



function prepareBreakfast() {

    let ingredients={
        protein:0,carb:0,fat:0,flavour:0
    }

    let meals={
        apple:{protein:0,carb:1,fat:0,flavour:2},
        coke:{protein:0,carb:10,fat:0,flavour:20},
        burger:{protein:0,carb:5,fat:7,flavour:3},
        omlet:{protein:5,carb:0,fat:1,flavour:1},
        cheverme:{protein:10,carb:10,fat:10,flavour:10}
    }

    let commands={
        restock:(product,quantity)=>{
            ingredients[product]+=quantity
            return 'Success'
        },
        prepare:(meal,quantity)=>{
            validateIngredientsQuantity()
            function validateIngredientsQuantity() {
                if(meal.protein <ingredients.protein){

                }else if(meal.carb <ingredients.carb) {

                }else if(meal.fat <ingredients.fat) {

                }else if(meal.flavour <ingredients.flavour) {

                }
            }
        },
        report:()=>`protein=${ingredients.protein} carbohydrate=${ingredients.carb}`+
            ` fat=${ingredients.fat} flavour=${ingredients.flavour}`
    }

    return (input)=> {
        input=input.split(/ /)
        return commands[input.shift()](...input)
    }
}