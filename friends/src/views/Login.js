import React from "react";

class Login extends React.Component {
  state = {
      username: '',
      password: '',
  };

  handleChanges = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChanges}/>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChanges} />

        </form>
      </div>
    );
  }
}

export default Login;