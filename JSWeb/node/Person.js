class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    sayHi(){
        console.log(`Hello,my name is ${this.name} and I am on ${this.age} years old`)
    }
}

module.exports=Person;