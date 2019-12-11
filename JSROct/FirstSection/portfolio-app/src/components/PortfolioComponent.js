import React from 'react';
import {Link} from 'react-router-dom';
const PortfolioPage = () => (
    <div>
        <h1>Portfolio Page</h1>
        <p>This is my list of Portfolio  components</p>
        <Link to="/portfolio/1">Item One</Link>        
        <Link to="/portfolio/2">Item Two</Link>
    </div>
)
export default PortfolioPage;