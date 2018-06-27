import React,{Component} from 'react'


class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{
                username:'',
                password:''
            }
        }
        this.onInputChange=this.onInputChange.bind(this)
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }

    onInputChange(event){
       let user=this.state.user

       let inputName=event.target.name
       let inputValue=event.target.value

       user[inputName]=inputValue
       this.setState({user})
    }
    onFormSubmit(event){
        event.preventDefault()
        console.log(this.state.user)
       
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            Username:
            <input
            type='text'
            name='username'
            value={this.state.user.username}
            onChange={this.onInputChange}
            />
            <br/>
            Password:
            <input
            type='password'
            name='password'
            value={this.state.user.password}
            onChange={this.onInputChange}
            />
            <br/>
            <input type='submit'/>
            </form>
        )
    }
}



export default Register