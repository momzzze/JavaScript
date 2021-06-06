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
<<<<<<< Updated upstream
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
=======
// function solve(arr) {
//     let products = [];
//     for (let i = 0; i < arr.length; i++) {
//         let [townName, productName, productPrice] = arr[i].split(' | ');
//         productPrice = Number(productPrice);

//         if (!products.hasOwnProperty(productName)) {
//             products[productName] = {};
//         }

//         products[productName][townName] = productPrice;
//     }
//     let productEntries = Object.entries(products);
//     for (const key in products) {
//         console.log(key)
//     }
//     console.log(productEntries);
// }

// solve(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);

//----------------------------------------------------6--------------------------
// function solve(arr) {
//     let productCatalogue = {};
//     for (let i = 0; i < arr.length; i++) {
//         let [productName, productPrice] = arr[i].split(' : ');
//         productPrice = Number(productPrice);
//         let initial = productName[0].toUpperCase();

//         if (productCatalogue[initial] === undefined) {
//             productCatalogue[initial] = {};
//         }
//         productCatalogue[initial][productName] = productPrice;
//     }
//     let result = [];
//     let initialsSorted = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));
//     for (const key of initialsSorted) {
//         let products = Object.entries(productCatalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
//         result.push(key);
//         let productsAsStrings = products.map(x => `  ${x[0]}: ${x[1]}`).join('\n');
//         result.push(productsAsStrings);
//     }
//     return result.join('\n');
// }

// console.log(solve(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']));

function solve(inputArr) {
    let titles = serializeRow(inputArr[0]);
    let rows = inputArr.slice(1).map(row => serializeRow(row).reduce(acc,el)=>acc[titles],{}).reduce((acc,el)=> ,{})


    function serializeRow(str) {
        return str.split(/\s*\|\s*/gim).filter(x => x !== '').map(x => isNaN(Number(x)) ? x : Number(Number(x).toFixed(2)));
    }
}
>>>>>>> Stashed changes
