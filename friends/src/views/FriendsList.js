import React from 'reaact';
import Friend from '../components/Friend'

const FriendsList = () => {
    return (
        <div>
            {this.props.friends.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>
    )
}
export default FriendsList