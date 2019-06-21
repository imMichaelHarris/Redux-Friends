import React from "react";
import {connect} from 'react-redux'
import Friend from "../components/Friend";
import {getFriends} from '../actions'

class FriendsList extends React.Component {
  state = {
  };

  componentDidMount(){
    this.props.getFriends()
  
  }
  render() {
    return (
      <div>
                <h1>I'm friends list</h1>

        {this.props.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends
  }
}
export default connect(mapStateToProps, {getFriends})(FriendsList);
