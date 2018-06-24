import React,{Component} from 'react';

class Button extends Component{

    constructor(props){
        super(props)
        this.buttonCLick=this.buttonCLick.bind(this)
        this.state={
            count:0
        }
    }

     buttonCLick(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))      
     }

    render(){        

        return (
            <button onClick={this.buttonCLick}>
                {this.props.text} - Clicked {this.state.count}
            </button>
        )
    }
}


export default Button