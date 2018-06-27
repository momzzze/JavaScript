import React,{Component} from 'react';


export default class ButtonWithClick extends Component{

constructor(props){
   super(props) 

   this.onButtonCLicked=this.onButtonCLicked.bind(this)
}

onButtonCLicked(event){
    console.log(event.target)
    console.log(this.props.name)
    let vlaue=event.target.vlaue

    this.setState({
        someValue:vlaue
    })
   
}


    render(){
        return (<button onClick={this.onButtonCLicked}>Click me!</button>)
    }
}