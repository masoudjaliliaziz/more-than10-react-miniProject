import React from "react";
import UserTrow from "./UserTrow";

function UserTbody({ user }) {
  return (
    <tbody>
      <UserTrow user={user} />
    </tbody>
  );
}

export default UserTbody;
