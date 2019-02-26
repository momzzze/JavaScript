import React from 'react';
import './login.css';

class LogInForm extends React.Component {

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => {
                   // TODO: prevent the default behavior of the event and use the loginUser function by passing it the data from the form
                }}>
                    <label>Usersname</label>
                    <input type="text" id="usernameLogin"/>
                    <label>Password</label>
                    <input type="password" id="passwordLogin"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LogInForm;
