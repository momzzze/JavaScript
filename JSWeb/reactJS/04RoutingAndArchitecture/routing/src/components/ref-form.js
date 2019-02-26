import React,{Component} from 'react';

class MyForm extends Component {
    getEmailRef = email => {
      this.email = email;
    };
    getPasswordRef = password => {
      this.password = password;
    };
    handleSumbit = e => {
      e.preventDefault();
      const { value:email } = this.email;
      const { value:password } = this.password;
  
      const payload={
          email,password
      }
  
      console.log(JSON.stringify(payload,null,4))
    };
    render() {
      return (
        <form onSubmit={this.handleSumbit}>
          Email: <input type="email" id="email" ref={this.getEmailRef} />
          <br />
          Password:{" "}
          <input type="password" id="password" ref={this.getPasswordRef} />
          <br/>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }

  export default MyForm