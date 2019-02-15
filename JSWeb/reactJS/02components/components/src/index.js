import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class HelloWorld extends Component {



    //construcor have to be writed all the time!
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
        this.updateCounter = this.updateCounter.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    resetState() {
        this.setState({
            count: 0
        })
    }

    updateCounter() {
        this.setState({
            count: this.state.count + 1
        },()=>{
            const updatedCount=this.state.count;
            window.localStorage.setItem('count',`${updatedCount}`);
        })
    }
    //return JSX elements
    render() {
        // const { isLoading } = this.props;
        // if (isLoading) {
        //     return (<span>Loading....</span>)
        // }
        // return (

        //     <div>
        //         Hello World
        //     </div>
        // )
        const { count } = this.state;



        return (
            <div>
                <span>{count}</span>
                <br />
                <button onClick={this.updateCounter}>+</button>
                <button onClick={this.resetState}>reset</button>
            </div>
        )
    }
}



ReactDOM.render(
    <div>
        <HelloWorld isLoading={true} />
        <HelloWorld isLoading={true} />
    </div>

    , document.getElementById('root'));


