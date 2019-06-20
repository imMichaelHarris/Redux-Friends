import React from "react";
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';
import {logIn} from '../actions'

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

  login = e => {
      e.preventDefault();
      this.props.logIn()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
            <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChanges}/>
          <label>Password:</label>

          <input type="password" name="password" value={this.state.password} onChange={this.handleChanges} />

            <button>{this.props.loggingIn ? <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> : 'Login' }</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.login.loggingIn

  }
}

export default connect(mapStateToProps, {logIn})(Login);
