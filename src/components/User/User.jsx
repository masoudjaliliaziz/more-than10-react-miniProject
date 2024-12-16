import React from "react";
import UserTable from "./childComponents/UserTable";

const users = [
  { id: 1, name: "masoud", lastName: "jalili" },

  { id: 2, name: "ali", lastName: "kianmehr" },
  { id: 3, name: "mozhgan", lastName: "ragabi" },
];

function User() {
  return (
    <div>
      <UserTable user={users} />
    </div>
  );
}

export default User;
