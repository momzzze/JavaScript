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

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
}
const removeAll = () => {
    app.options = [];
    renderTemplate();

}

const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    console.log(option)
}

let templateOne = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>

        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>

        <form action="" onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
);
let appRoot = document.getElementById('app');
const numbers = [55, 101, 1000];


const renderTemplate = () => {
    const templateOne = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={removeAll}>Remove All Options</button>

            {
                numbers.map((n) => {
                    return <p key={n}>Number: {n}</p>
                })
            }

            <ol>
                {app.options.map((i) => {
                    return <li key={i}>{i}</li>
                })}
            </ol>

            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(templateOne, appRoot);
};


renderTemplate();
let templateTwo = (

    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>

    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)



var template = React.createElement("p", null, "This is JSX from app.js ");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);


function getFirstName(name){
   let wholeName=name.split(' ');
   return wholeName[0];
}

let nameArrow=(n)=>{
    return n.split(' ')[0]
}

const getFirstNameReg=(x)=> x.split(' ')[0]

console.log(getFirstName('Nikola Ninov'))
console.log(getFirstNameReg('Nikola Ninov'))
console.log(nameArrow('Nikola Ninov'))

const multiplier={
    numbers:[2,6,3,5,8],
    multiplyBy:2,
    multiply(){
       return  this.numbers.map((n)=>n*this.multiplyBy);     
    }
}

console.log(multiplier.multiply())