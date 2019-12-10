import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));



















// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     )
// }


// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page.</p>
//     </div>
// )




// class OldSyntax {
//     constructor() {
//         this.name = "Mike";
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting() {
//         return `Hi.My name is ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//     name = 'Jen';
//     getGreeding = () => {
//         return `Hi.My name is ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeding;
// console.log(newGetGreeting());



//import './utils.js';
// import { square, add } from './utils.js'
// import isSenior, { isAdult, canDrink } from './person.js'

// console.log('App.js is running')
// console.log(square(4));
// console.log(add(100, 23));
// console.log(isAdult(14));
// console.log(canDrink(22));
// console.log(isSenior(22));

// import validator from 'validator';
// console.log(validator.isEmail('test@ss.ss'));


// const template =<p>this is jsx from webpack</p>

// ReactDOM.render(template, document.getElementById('app'));

// class Header extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1> {this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }


// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePickOption}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What Should I do
//                 </button>
//             </div>
//         )
//     }
// }



// class Options extends React.Component {

//     render() {
//         let options = this.props.options
//         return (
//             <div>
//                 {<button onClick={this.props.handleDeleteOptions}>Remove All</button>}
//                 {options.map((option) => <Option key={option} optionText={option} />)}
//             </div>
//         )
//     }
// }


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         )
//     }
// }
