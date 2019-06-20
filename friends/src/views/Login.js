import React from "react";

class Login extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <form>
          <input type="text" name="username" value={this.state.username} onChange={handleChanges}/>
          <input type="password" name="password" value={this.state.password} onChange={handleChanges} />

        </form>
      </div>
    );
  }
}

export default Login;
