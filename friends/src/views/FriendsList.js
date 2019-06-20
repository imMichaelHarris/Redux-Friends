import React from "reaact";
import Friend from "../components/Friend";

class FriendsList extends React.Component {
  state = {};

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
export default FriendsList;
