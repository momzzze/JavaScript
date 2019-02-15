import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import contracts from "./components/data/contacts.json"
import App from './components/App/App';


import * as serviceWorker from './serviceWorker';

const htmlArray = [];
contracts.forEach((contact, index) => {
    htmlArray.push(<div key={index} className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>)
})

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
            <Details />
        </div>
    </div>
);



const Contacts = () => (

    htmlArray
)

const Details = () => (
    <div id="details">
        <h1>Details</h1>
        <div className="content">
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">Ivan</span>
                    <span className="name">Ivanov</span>
                </div>
            </div>
            <div className="info">
                <span className="info-line">&phone; 0887 123 456</span>
                <span className="info-line">&#9993; i.ivanov@gmail.com</span>
            </div>
        </div>
    </div>
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

                // If you want your app to work offline and load faster, you can change
                // unregister() to register() below. Note this comes with some pitfalls.
                // Learn more about service workers: http://bit.ly/CRA-PWA

