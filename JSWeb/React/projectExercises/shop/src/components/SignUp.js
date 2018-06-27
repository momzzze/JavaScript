import React,{Component} from 'react'
import { Link } from 'react-router-dom'



class Register extends Component{
    render () {
        return(
            <form>
            <h1 className='centerh1'>Register</h1>
                <div className='container'>
                    <label for='email'><b>Email Address</b></label>
                    <input type='text' name='email' placeholder="Enter Email" required/>

                    <label for='psw'><b>Password</b></label>
                    <input type='password' name='password' placeholder="Enter Password" required/>

                    <label for='psw'><b>Confirm Password</b></label>
                    <input type='password' name='confirm-password' placeholder="Confirm Password" required/>

                    <button type='submit' name='submit' className='registerbtn'>Register</button>
                </div>
            </form>
        )
    }
}

export default Register