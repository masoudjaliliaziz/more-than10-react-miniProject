import React, { useState } from "react";
import UserTable from "./childComponents/userTable/UserTable";
import UserForm from "./childComponents/userForm/UserForm";

function User() {
  const [users, setUsers] = useState([
    { id: 1, name: "masoud", lastName: "jalili" },
    { id: 2, name: "ali", lastName: "kianmehr" },
    { id: 3, name: "mozhgan", lastName: "ragabi" },
  ]);
  const [selectedUser, setSelectedUser] = useState({});
  function handleDeleteUser(user) {
    setUsers((cur) => cur.filter((curUser) => curUser.id !== user.id));
  }
  function handleUpdate(user) {
    setSelectedUser(user);
  }
  return (
    <div>
      <UserTable
        user={users}
        onDeleteUser={handleDeleteUser}
        onupdateUser={handleUpdate}
      />
      <UserForm
        users={users}
        setUsers={setUsers}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
}

export default User;
