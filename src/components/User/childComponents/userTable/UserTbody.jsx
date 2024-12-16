import React from "react";
import UserTrow from "./UserTrow";

function UserTbody({ user, onDeleteUser, onupdateUser }) {
  return (
    <tbody>
      <UserTrow
        user={user}
        onDeleteUser={onDeleteUser}
        onupdateUser={onupdateUser}
      />
    </tbody>
  );
}

export default UserTbody;
