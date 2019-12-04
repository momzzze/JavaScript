
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        console.log('fetch data');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('save data');
    }

    componentWillUnmount() {
        console.log('Comp will unmount');
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }


    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid Value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }
        // this.setState((prevState) => {

        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    handlePickOption={this.handlePickOption}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

IndecisionApp.defaultProps = {
    options: []
}

Header.defaultProps = {
    title: 'Indecision'
}
// class Header extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1> {this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}
            >
                What Should I do
            </button>
        </div>
    )
}
// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePickOption}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What Should I do
//                 </button>
//             </div>
//         )
//     }
// }


const Options = (props) => {
    let options = props.options
    return (
        <div>
            {<button onClick={props.handleDeleteOptions}>Remove All</button>}
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    )
}
// class Options extends React.Component {

//     render() {
//         let options = this.props.options
//         return (
//             <div>
//                 {<button onClick={this.props.handleDeleteOptions}>Remove All</button>}
//                 {options.map((option) => <Option key={option} optionText={option} />)}
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
                </button>
        </div>
    )
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         )
//     }
// }


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);


        // this.setState(() => {
        //     return {
        //         error
        //     }
        // })
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option' />
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));