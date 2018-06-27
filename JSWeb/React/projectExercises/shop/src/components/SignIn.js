import React,{Component} from 'react';


class Loging extends Component{
    render () {
        return(
           
            <form>
            <h1 className='centerh1'>Log In</h1>
            <div className='container'>
                <label for='email'><b>Email Address</b></label>
                <input type='text' name='email' placeholder="Enter Email" required/>

                <label for='psw'><b>Password</b></label>
                <input type='password' name='password' placeholder="Enter Password" required/>

                <button type='submit' name='submit' className='registerbtn'>Login</button>
            </div>
        </form>
        )
    }
}

export default Loging