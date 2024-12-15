import React from "react";
import Button from "./Button";

function Friend({ friend, onClick, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  console.log(isSelected);
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* start conditional rendering--------------------- */}
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {-friend.balance}$
        </p>
      )}
      {friend.balance == 0 && <p>you and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}$
        </p>
      )}
      {/* finish conditional rendering ----------------------*/}
      <Button onClick={() => onClick(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
