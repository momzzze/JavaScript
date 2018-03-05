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


function traverseDom(selector) {

    let targetNode=$(selector);
    let maxDepth=0;
    let deepestNode=targetNode;

    depthFirstSearch(0,targetNode);
    hightFromBottomToTarget(maxDepth,deepestNode);

    function hightFromBottomToTarget(nodesRemaining,currentNode) {
        if(nodesRemaining === -1){
            return;
        }
        currentNode.addClass('highlight');
            let parent=currentNode.parent();
        hightFromBottomToTarget(nodesRemaining - 1, $(parent))
    }

    function depthFirstSearch(depth,currentNode) {
        if(depth > maxDepth){
            maxDepth=depth;
            deepestNode=currentNode
        }

        let children=currentNode.children();
        for (let obj of children) {
            depthFirstSearch(depth+1,$(obj))
        }
    }
}



function result() {
    let id=0;
    let allReports=new Map;
    let element=null;
    let module = {


        report: (author, description, isReproducible, severity) => {
            allReports.set(id++,{
                author,
                description,
                isReproducible,
                severity,
                status:'Open'
            })
            this.output()
        },
        setStatus: (id, newStatus) => {
            allReports.get(id).status=newStatus;
        },
        remove: (id)=>{
            allReports.delete(id)
        },
        sort: (criteria)=>{

            [...allReports].sort((a,b)=>{
                if(criteria=='ID'||!criteria){
                return a[0]-b[0]
            }
            else {
                return a[1][criteria]-b[1][criteria]
            }})
        },
        output: (selector)=>{
            element=$(selector);
            for (let id in allReports) {
                let report =allReports.get(id)
                element.append($('<div>').setAttribute('id', `report_${id}`)
                    .addClass('report')
                    .append($('<div>').addClass('body'))
                    .append($(`<p>${report.description}</p>`))
                    .append($('<div>').addClass('title'))
                    .append($(`<span>`).addClass('author').text(`Submitted by: ${report.author}`))
                    .append($(`<span>`).addClass('status').text(`${report.status} | ${report.severity}`))
                )

            }
        }
    }
    return module

};

function solve() {

    let arr = [];

    let obj = {
        add: function add(element) {

            arr.push(element);
            arr.sort((a, b) => a - b);
            this.size++;
        },
        remove: function remove(index) {

            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                this.size--;
            }
        },
        get: function get(index) {

            if (index >= 0 && index < arr.length) {

                return(arr[index]);
            }
        },

        size: 0
    }
    return obj;
}
