var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log('Moving...');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.mew = function () {
        console.log('Mew!');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Bark!!!');
    };
    return Dog;
}(Animal));
var cat = new Cat('Ivan');
var dog = new Dog('Pesho');
cat.mew;
cat.move;
dog.bark;
dog.move;
function solve(person) {
    console.log(person.name);
}
solve({
    name: 'Ivan',
    age: 5
});
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
solve(new Human());
function Smack(arg) {
    console.log(arg);
}
Smack(5);
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.add = function (value) {
        console.log(value);
    };
    return List;
}());
var numbers = new List();
numbers.add('Ivan');
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var someValue;
someValue = Color.Black;
