import React from "react";
import UserThead from "./UserThead";
import UserTbody from "./UserTbody";

function UserTable({ user }) {
  return (
    <table className="w-7/12 mx-auto my-10">
      <UserThead />
      <UserTbody user={user} />
    </table>
  );
}

export default UserTable;
