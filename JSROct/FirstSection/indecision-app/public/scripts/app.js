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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};
var removeAll = function removeAll() {
    app.options = [];
    renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};

// let templateOne = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <p>{app.options.length}</p>

//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>

//         <form action="" onSubmit={onFormSubmit}>
//             <input type="text" name="option" />
//             <button>Add Option</button>
//         </form>
//     </div>
// );
var appRoot = document.getElementById('app');
var numbers = [55, 101, 1000];

var renderTemplate = function renderTemplate() {
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All Options'
        ),
        numbers.map(function (n) {
            return React.createElement(
                'p',
                { key: n },
                'Number: ',
                n
            );
        }),
        React.createElement(
            'ol',
            null,
            app.options.map(function (i) {
                return React.createElement(
                    'li',
                    { key: i },
                    i
                );
            })
        ),
        React.createElement(
            'form',
            { action: '', onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(templateOne, appRoot);
};

renderTemplate();
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
