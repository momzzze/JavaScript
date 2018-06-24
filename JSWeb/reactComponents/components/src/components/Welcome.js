import React,{Component} from 'react';
import './Wellcome.css'
import Button from './Button';


class Wellcome extends Component{
    render(){
        let title=this.props.title|| 'Title'
        let subtitle=this.props.subtitle|| 'Subtitle';




      return (     
        <div className='App-Wellcome'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <br/>
            <Button text="Some text" />
           
        </div>
      )
    }
  }


export default Wellcome
