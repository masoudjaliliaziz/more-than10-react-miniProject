import React from "react";
import Friend from "./Friend";
function FriendList({ friends, onClick, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            onClick={onClick}
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
