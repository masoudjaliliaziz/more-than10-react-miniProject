import React from "react";
import UserTrow from "./UserTrow";

function UserTbody({ user, onDeleteUser }) {
  return (
    <tbody>
      <UserTrow user={user} onDeleteUser={onDeleteUser} />
    </tbody>
  );
}

export default UserTbody;
