import React from "react";
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';
import {logIn} from '../actions'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    }

  };

  handleChanges = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value

        }
      })
  }

  login = e => {
      e.preventDefault();
      this.props.logIn(this.state.credentials)
      .then(res => {
        if(res){
          this.props.history.push('/friends')
        }
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
            <label>Username:</label>
          <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChanges}/>
          <label>Password:</label>

          <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChanges} />

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
