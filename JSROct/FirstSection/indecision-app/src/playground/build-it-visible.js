class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisability=this.handleToggleVisability.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisability() {
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisability}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }



}
ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderMethod();
// }

// const renderMethod = () => {
//     let templateOne = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(templateOne, document.getElementById('app'));
// }

// renderMethod();