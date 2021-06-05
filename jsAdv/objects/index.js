// function solve(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (i % 2 == 0) {
//             result[arr[i]] = Number(arr[i + 1]);
//         }
//     }
//     return result;
// }

// console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

//----------------------------------------------------------------------------2--------------

// function solve(obj) {
//     if (obj.dizziness !== false) {
//         obj.levelOfHydrated += (obj.weight * 0.1) * obj.experience;
//         obj.dizziness = false;
//     }
//     return obj;
// }

// // console.log(solve({
// //     weight: 80,
// //     experience: 1,
// //     levelOfHydrated: 0,
// //     dizziness: true
// // }));

// console.log(solve({
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }));
//---------------------------------------3-------------------
// function solve(obj) {

//     function formingEngine(power) {
//         const engine = {};
//         if (power <= 90) {
//             engine.power = 90;
//             engine.volume = 1800;
//         } else if (power <= 120) {
//             engine.power = 120;
//             engine.volume = 2400;
//         } else if (power <= 200) {
//             engine.power = 200;
//             engine.volume = 3500;
//         }
//         return engine;
//     }

//     function carriageForming(type, color) {
//         const carriage = { color, type };
//         return carriage;
//     }
//     function wheelsizeForming(wheel) {
//         let wheelsize = wheel % 2 == 0 ? wheel - 1 : wheel;
//         const wheels = new Array(4).fill(wheelsize);
//         return wheels;
//     }

//     return {
//         model: obj.model,
//         engine: formingEngine(obj.power),
//         carriage: carriageForming(obj.carriage, obj.color),
//         wheels: wheelsizeForming(obj.wheelsize)
//     }
// }

// console.log(solve({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }));
//--------------------------------------------4------------------------
// function solve(arr) {
//     let heroesArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let [name, level, items] = arr[i].split(' / ');
//         level = Number(level);
//         items = items !== undefined ? items.split(', ') : [];
//         heroesArr.push({ name: name, level: level, items: items });
//     }
//     return JSON.stringify(heroesArr);
// }
// console.log(solve(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);

//--------------------------------5---------------------------------
function solve(arr) {
  let products = [];
  for (let i = 0; i < arr.length; i++) {
    let [townName, productName, productPrice] = arr[i].split(" | ");
    productPrice = Number(productPrice);

    if (!products.hasOwnProperty(productName)) {
      products[productName] = {};
    }

    products[productName][townName] = productPrice;
  }

  let result = [];
 
  for (const key in products) {
    let townsSorted = Object.entries(products[key]).sort(
      (a, b) => a[1] - b[1]
    );
    let cheapestTown = townsSorted[0];
    result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
  }
  return result.join('\n');
}

console.log(solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]));
