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
    if(this.props.fetching){
      return <h1>Loading....</h1>
    } else {
      return (
        <div>
  
          {this.props.friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
      );
    }

  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends,
    fetching: state.friends.fetching
  }
}
export default connect(mapStateToProps, {getFriends})(FriendsList);
