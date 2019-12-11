import React from 'react';
import {Link} from 'react-router-dom';
const PortfolioItem = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This page is for the item with id {props.match.params.id}</p>
        <Link to="/portfolio">back</Link>
    </div>
)


export default PortfolioItem