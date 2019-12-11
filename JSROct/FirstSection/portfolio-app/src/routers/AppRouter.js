import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundComponent';
import Header from '../components/HeaderComponent';
import Contact from '../components/ContactComponent';
import HomePage from '../components/HomeComponent';
import PortfolioPage from '../components/PortfolioComponent';
import PortfolioItem from '../components/IndividualPortfolioComponent';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />                  
                <Route path="/portfolio/:id" component={PortfolioItem}/>        
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />                
            </Switch>
        </div>


    </BrowserRouter>
)

export default AppRouter