class Animal {
    constructor(public name: string) { }
    move() {
        console.log('Moving...')
    }
}

class Cat extends Animal {
    mew() {
        console.log('Mew!')
    }

}
class Dog extends Animal {
    bark() {
        console.log('Bark!!!');
    }
}

let cat = new Cat('Ivan')
let dog = new Dog('Pesho')

cat.mew
cat.move
dog.bark
dog.move

interface IPerson {
    name: string;
    age: number;
}

function solve(person: { name: string,age:number}) {
    console.log(person.name)
}

solve({
    name: 'Ivan',
    age: 5
})

class Human implements IPerson {
    name: string
    age: number
}

solve(new Human())

function Smack<T>(arg: T) {
    console.log(arg)
}

Smack<number>(5)

class List<T>{
    add(value: T) {
        console.log(value)
    }
}

let numbers = new List<string>()
numbers.add('Ivan')


enum Color{
    Black,Red,Green
}

let someValue:Color;


someValue=Color.Black
