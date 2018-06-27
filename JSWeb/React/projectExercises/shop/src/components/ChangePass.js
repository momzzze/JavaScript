import React,{Component} from 'react';


class ChangePass extends Component{
    render () {
        return(            
            <form>
                <h1 className='centerh1'>Change Password</h1>
                <div className='container'>                    
                    
                    <input type='password' name='password' placeholder="New Password" required/>

                    
                    <input type='password' name='confirm-password' placeholder="Confirm New Password" required/>

                    <button type='submit' name='submit' className='registerbtn'>Update Password</button>
                </div>
            </form>
        )
    }
}

export default ChangePass