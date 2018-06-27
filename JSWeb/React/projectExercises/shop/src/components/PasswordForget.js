import React,{Component} from 'react';


class ResetPass extends Component{
    render () {
        return(
           
            <form>
            <h1 className='centerh1'>Reset Password</h1>
                <div className='container'>                   
                    
                    <input type='text' name='email' placeholder="Email Address" required/>                   

                    <button type='submit' name='submit' className='registerbtn'>Reset My Password</button>
                </div>
            </form>
        )
    }
}

export default ResetPass