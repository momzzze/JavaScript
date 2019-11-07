console.log('App is running!');

let username = 'Nikola';
let userAge = 27;
let userLocation = 'Panaguyrishte,Bulgaria';

let user = {
    name: username,
    age: userAge,
    location: userLocation
}

let app = {
    title: 'Indecision App',
    //subtitle: 'This is my subtitle',
    options: ['one', 'two']
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

let templateOne = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count=0;    
    renderCounterApp();
}

let appRoot = document.getElementById('app')

const renderCounterApp = () => {
    let templateTwo = (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}
renderCounterApp();
// let templateTwo = (

//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>

//     // <div>
//     //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     //     <p>Age: {user.age}</p>
//     //     {getLocation(user.location)}
//     // </div>
// )



// var template = React.createElement("p", null, "This is JSX from app.js ");
// var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);


// function getFirstName(name){
//    let wholeName=name.split(' ');
//    return wholeName[0];
// }

// let nameArrow=(n)=>{
//     return n.split(' ')[0]
// }

// const getFirstNameReg=(x)=> x.split(' ')[0]

// console.log(getFirstName('Nikola Ninov'))
// console.log(getFirstNameReg('Nikola Ninov'))
// console.log(nameArrow('Nikola Ninov'))

// const multiplier={
//     numbers:[2,6,3,5,8],
//     multiplyBy:2,
//     multiply(){
//        return  this.numbers.map((n)=>n*this.multiplyBy);     
//     }
// }

// console.log(multiplier.multiply())


