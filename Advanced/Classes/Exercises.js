class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color =color;

    }
    calcArea(){
        return this.width*this.height
    }
}


//let myRect=new Rectangle(3,4,'red');
//console.log(myRect.color);


function createPerson() {
    class Person{
        constructor(firstName,lastName,age,email){
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.email=email;
        }
        toString(){
            return `${this.firstName} ${this.lastName} ${this.age}, email: ${this.email}`
        }
    }
    return[
        new Person('Maria','Petrova',22,'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan','Nikolov',25),
        new Person('Peter','Kolev',24,'ptr@gmail.com'),
    ]
}


class Circle{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
        return this.radius*2
    }
    set diameter(newDiameter){
        this.radius=newDiameter/2
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }
}
let c=new Circle(10)
console.log(c.area)


class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        return Math.sqrt(dx*dx+dy*dy)
    }
}

let p1=new Point(5,5);
let p2=new Point(10,10)
console.log(Point.distance(p1, p2));


let result=(function () {
    let Suits={
        CLUBS: "\u2663",
        DIAMONDS:"\u2666",
        HEARTS:"\u2665",
        SPADES:"\u2660"
    }
    let Faces=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    class Card{
        constructor(face, suit){
            this.face=face;
            this.suit=suit;
        }
        set face(f){
            if(!Faces.includes(f)){
                throw new TypeError('Invalid card face: '+f)
            }
            this._face=f
        }
        get face(){
            return this._face
        }
        set suit(s){
            if(!Object.values(Suits).includes(s)){
                throw new TypeError('Invalid card face: '+s)
            }
            this._suit=s
        }
        get suit(){
            return this._suit
        }
        toString(){
            return this._face+this._suit
        }
    }
    return{Suits,Card}
})()



let Card=result.Card;
let Suits=result.Suits;


let c1=new Card('2',Suits.SPADES)
console.log(c1+'');