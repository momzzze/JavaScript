import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import contacts from "./components/data/contacts.json"
import App from './components/App/App';


import * as serviceWorker from './serviceWorker';

const htmlArray = [];
contacts.forEach((contact, index) => {
    htmlArray.push(<div onClick={() => {currentlySelected = index;render();}} key={index} className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>)
})

let currentlySelected = 0;

const Main = () => (
    <div className="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    <Contacts />
                </div>
            </div>
            <Details index={currentlySelected} />
        </div>
    </div>
);



const Contacts = () => (

    htmlArray
)

const Details = (props) => (
    <div id="details">
        <h1>Details</h1>
        <div className="content">
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">{contacts[props.index].firstName}</span>
                    <span className="name">{contacts[props.index].lastName}</span>
                </div>
            </div>
            <div className="info">
                <span className="info-line">&phone; {contacts[props.index].phone}</span>
                <span className="info-line">&#9993; {contacts[props.index].email}</span>
            </div>
        </div>
    </div>
)

const render =()=> ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
render();


//ReactDOM.render(<App />, document.getElementById('root'));

                // If you want your app to work offline and load faster, you can change
                // unregister() to register() below. Note this comes with some pitfalls.
                // Learn more about service workers: http://bit.ly/CRA-PWA

