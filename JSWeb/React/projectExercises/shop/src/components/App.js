import React,{Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home'
import SignUpForm from './SignUp';
import SignInForm from './SignIn';
import ChangePass from './ChangePass';
import ResetPass from './PasswordForget';
import Landing from './Landing';
import * as routes from '../constants/routes';
import Account from './Account';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount(){
    firebase.auth.onAuthStateChanged(authUser=>{
      authUser
      ? this.setState(()=>({authUser}))
      : this.setState(()=>({authUser: null}))
    })
  }

  render(){
    return(
      <Router>
      <div>
        <Navigation authUser={this.state.authUser}/>
  
        <hr/>
  
        <Route
          exact path={routes.LANDING}
          component={()=><Landing />}
        />
  
        <Route
          exact path={routes.SIGN_UP}
          component={()=><SignUpForm />}
        />
  
        <Route
          exact path={routes.SIGN_IN}
          component={()=><SignInForm />}
        />
  
        <Route
          exact path={routes.PASSWORD_FORGET}
          component={()=><ResetPass />}
        />
  
        <Route
          exact path={routes.HOME}
          component={()=><Home />}
        />
  
        <Route
          exact path={routes.ACCOUNT}
          component={()=><Account />}
        />
  
        <Route
          exact path={routes.CHANGE_PASSWORD}
          component={()=><ChangePass />}
        />
  
      </div>
    </Router>
    )
  }
}
  

export default App;
