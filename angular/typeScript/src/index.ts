// class User {
//     private name: String;
//     constructor(name:string) {
//         this.name=name
//     }
//     sayHello(){
//         return `${this.name} says hi!`
//     }
// }
// const user=new User('Nikola');
// console.log(user.sayHello())
//--------------------------------------------------------
// class Box<T>{
//     private _boxes:any = [];

//     public add<T>(element: T): T {
//         return this._boxes.push(element)
//     }

//     public remove() {
//         return this._boxes.pop();
//     }

//     get count(): number {
//         const count = this._boxes.length 
//         return count
//     }
// }


// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// box.remove();
// console.log(box.count);
//----------------------------------------------------
// class KeyValuePair<T, U>{

//     private item: any = {};


//     setKeyValue(key: T, value: U) {
//         let tmp = {
//             key: key,
//             val: value
//         }
//         this.item = tmp;
//     }

//     display() {
//         console.log(`key = ${this.item.key}, value = ${this.item.val}`)
//     }

// }
// let kvp = new KeyValuePair<number, string>();
// kvp.setKeyValue(1, 'Steve');
// kvp.display();
//------------------------------------------------------------
