(function solve() {
    Array.prototype.last=function () {
        return this[this.length-1]
    };
    Array.prototype.skip=function (n) {
        let result=[]
        for (let i = n; i < this.length; i++) {
            result.push(this[i])           
        }
        return result
    };
    Array.prototype.take=function (n) {
        let result=[]
        for (let i = 0; i < n; i++) {
            result.push(this[i])            
        }
        return result
    };
    Array.prototype.sum=function () {
        let result=0;
        for (let numb of this) {
            result+=numb
        }
        return result
    };
    Array.prototype.average=function () {
        let del=Number(this.length)
        let result=this.sum()/del
        return result
    };

})();

/*-------------------------------------=2=--------------------------------------*/
                                /*Construction Crew*/


let worker={
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
};

function constructionCrew(input) {
    let worker=input

        if(worker.handsShaking===true){
            let result=Number(worker.weight*0.1)*Number(worker.experience);
            worker.bloodAlcoholLevel+=result;
            worker.handsShaking=false;
        }
        return worker

}

/*console.log(constructionCrew(worker))*/

/*----------------------------------------=3=---------------------------------------*/
                                    /*Car Factory*/


function carFactory(car) {
    let engine;
    let carriage;
    let wheels=[];

    if(car.power<=90){
        engine={
            power:90,
            volume:1800
        };
    }else if(car.power<=120){
        engine={
            power:120,
            volume:2400
        };
    }else if(car.power<=200){
        engine={
            power:200,
            volume:3500
        };
    }

    carriage={
        type:car.carriage,
        color:car.color
    };
    if(car.wheelsize%2===0){
        car.wheelsize--;
    }
    for (let i= 0; i < 4; i++) {

            wheels.push(car.wheelsize)
    }


    return {
        model:car.model,
        engine:engine,
        carriage:carriage,
        wheels:wheels
    }

}

let car={
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};



/*console.log(carFactory(car))*/
function getExtensibleObject(){
    let obj={
        extend:(template)=>{
        for (let property in template) {
            console.log(template[property]);
            if(typeof template[property]==='function'){
                Object.getPrototypeOf(obj)[property]=template[property];
            }else{
                obj[property]=template[property]
            }
        }
      }
    };

    return obj
};
let extensibleObject=getExtensibleObject();
extensibleObject.extend({
    extensionMethod: function (){return 'neshto'},
    extensionProperty: 'someString'})

/*console.log(extensibleObject);*/


