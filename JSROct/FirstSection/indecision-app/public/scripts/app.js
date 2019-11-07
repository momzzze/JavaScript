'use strict';

console.log('App is running!');

var username = 'Nikola';
var userAge = 27;
var userLocation = 'Panaguyrishte,Bulgaria';

var user = {
    name: username,
    age: userAge,
    location: userLocation
};

var app = {
    title: 'Indecision App',
    //subtitle: 'This is my subtitle',
    options: ['one', 'two']
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};
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
