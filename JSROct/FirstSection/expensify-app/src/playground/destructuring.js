// const person = {

//     name: 'Nikola',
//     age: 27,
//     location: {
//         city: 'Panaguyrishte',
//         temp: 14
//     }
// };

// const { name, age } = person
// //       /\
// // const name=person.name;
// // const age=person.age;
// const { city, temp } = person.location
// console.log(`${name} is ${age}.`);
// console.log(`It's ${temp} in ${city}.`);



// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const { title, author } = book;
// const { name:publisherName='Self-Published' } = book.publisher;
//console.log(publisherName);


//Array destructuring


// const address = ['1299 S Juniper Street', 'Panaguyrishte', 'Pazardjik', '4500'];

// const [street, city, state = 'New York', zip] = address;

// console.log(`You are in ${city} ${state}`)


const item = ['Coffee (Hot)', '$2.00', '$2.50', '2.75'];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);