import React from "reaact";
import {connect} from 'react-redux'
import Friend from "../components/Friend";


class FriendsList extends React.Component {
  state = {
      friends: []
  };

  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
export default connect(null, {})(FriendsList);
