import React,{Component} from 'react';


     

class Registrate extends Component{ 
    constructor(props){
        super(props)
    this.updateCount=this.updateCount.bind(this)
        this.state={
            count: 0,
            username:'',
            password:''
        }
    }
    onChangeEvent=(event)=>{       

        console.log(this.state.username)
        console.log(this.state.password)
        event.preventDefault()
    }
    

    updateCount(){
        

        this.setState({
            count: this.state.count+1,
            username:this.props.name
        })
    }             
    render(){      
        const {
            username,
            password
        }=this.state

        return(
            <div>
            
            <form onSubmit={this.onChangeEvent}>
            <input value={username} type="text" onChange={event=>this.setState({username:event.target.value})}/>
            <input value={password} type="password" onChange={event=>this.setState({password:event.target.value})} />
            <input type='submit'/>
            </form>
            <br/><hr/>



            <h1>Hello, {this.state.username}</h1>
            <button onClick={this.updateCount}>Click {this.state.count}</button>
            </div>
        )
    }
}

export default Registrate