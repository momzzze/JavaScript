import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/HomeComponent';
import AddExpensePage from '../components/CreateComponent';
import EditExpensePage from '../components/EditComponent';
import HelpPage from '../components/HelpComponent';
import NotFoundPage from '../components/NotFoundComponent';
import Header from '../components/HeaderComponent';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" exact={true} component={EditExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>


    </BrowserRouter>
)

export default AppRouter