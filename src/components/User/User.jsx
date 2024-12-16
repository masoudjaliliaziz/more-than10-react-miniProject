import React, { useState } from "react";
import UserTable from "./childComponents/userTable/UserTable";
import UserForm from "./childComponents/userForm/UserForm";

function User() {
  const [users, setUsers] = useState([
    { id: 1, name: "masoud", lastName: "jalili" },
    { id: 2, name: "ali", lastName: "kianmehr" },
    { id: 3, name: "mozhgan", lastName: "ragabi" },
  ]);
  function handleDeleteUser(user) {
    setUsers((cur) => cur.filter((curUser) => curUser.id !== user.id));
  }
  return (
    <div>
      <UserTable user={users} onDeleteUser={handleDeleteUser} />
      <UserForm users={users} setUsers={setUsers} />
    </div>
  );
}

export default User;
