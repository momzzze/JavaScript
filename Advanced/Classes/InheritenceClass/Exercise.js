function personAndTeacher() {
    class Person{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
        toString(){
            let className=this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, species: ${this.species})`

        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject=subject;
        }
        toString(){
        let patentStr=super.toString().slice(0,-1);
        return patentStr +`, subject: ${this.subject})`;
    }
}
class Student extends Person{
    constructor(name,email,course){
        super(name,email);
        this.course=course;
    }
    toString(){
        let baseStr=super.toString().slice(0,-1);
        return baseStr+`, course: ${this.course})`;
    }
}
    return{Person,Teacher,Student}
}


function classHierarchy() {
    class Figure{
        constructor(){
            if(new.target===Figure){
                throw new Error("Cannot instantiate an abstract class.")
            }

        }
        get area(){
            return undefined;
        }
        toString(){
            let type=this.constructor.name;
            return type;
        }
    }


    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius=radius;
        }
        get area(){
            return Math.PI*this.radius*this.radius
        }
        toString(){
            return super.toString()+` - radius: ${this.radius}`
        }
    }
    class Rectangle extends Figure{
        constructor(width,height){
            super();
            [this.width,this.height]=[width,height]
        }
        get area(){return this.width*this.height}
        toString(){
            return super.toString()+` - width: ${this.width}, height: ${this.height}`
        }
    }
    return {Figure,Circle,Rectangle}
}