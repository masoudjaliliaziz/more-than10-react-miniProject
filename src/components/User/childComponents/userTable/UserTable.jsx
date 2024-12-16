import React from "react";
import UserThead from "./UserThead";
import UserTbody from "./UserTbody";

function UserTable({ user, onDeleteUser }) {
  return (
    <table className="w-7/12 mx-auto my-10">
      <UserThead />
      <UserTbody user={user} onDeleteUser={onDeleteUser} />
    </table>
  );
}

export default UserTable;
