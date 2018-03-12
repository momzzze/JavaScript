let obj=require('./Exercise')
let person=obj.Person;
let teacher=obj.Teacher;


function extendedClass(classToExtend) {
    classToExtend.prototype.species='Human'
    classToExtend.prototype.toSpeciesString=function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendedClass(obj)
let person=new Person('Ivan', 'mail');
