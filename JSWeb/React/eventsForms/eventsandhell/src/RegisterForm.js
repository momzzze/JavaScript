import React,{Component} from 'react';

export default class RegisterForm extends Component{

    constructor(props){
        super(props)

        this.state={
            user:{
                username: '',
                password:''
            }
        }

        this.onInputCHanged=this.onInputCHanged.bind(this)
        this.onSubmited=this.onSubmited.bind(this)
    }

    onInputCHanged(event){
        let user=this.state.user
        let inputName=event.target.name
        let inputValue=event.target.value

    user[inputName=inputValue
    this.setState({user})

    }
    onSubmited(event){
        event.preventDefault()
        console.log(this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.onSubmited}>
            <input type='text' name='username'value={this.state.value}/>
            <input type='password' name='password' onChange={this.onInputCHanged}/>
            <input type='submit'/>
            </form>
        )
    }
}