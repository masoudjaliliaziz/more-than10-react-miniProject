import React, { useState } from "react";

function UserForm({ users, setUsers, selectedUser, setSelectedUser }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (selectedUser && selectedUser.id) {
      setUsers((cur) =>
        cur.map((user) =>
          user.id === selectedUser.id
            ? {
                ...user,
                name: selectedUser.name,
                lastName: selectedUser.lastName,
              }
            : user
        )
      );
      setSelectedUser(null);
    } else {
      const idArr = users.map((u) => u.id);
      const id = Math.max(...idArr) + 1;
      setUsers((cur) => [...cur, { id, name, lastName }]);
      setName("");
      setLastName("");
    }
  }

  return (
    <form
      className="w-7/12 flex flex-col mx-auto gap-3  "
      action=""
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">insert the name</label>
      <input
        value={selectedUser ? selectedUser.name : name}
        onChange={(e) =>
          selectedUser
            ? setSelectedUser((cur) => ({ ...cur, name: e.target.value }))
            : setName(e.target.value)
        }
        className="bg-slate-100 p-2 rounded-lg"
        type="text"
        id="name"
      />
      <label htmlFor="lastName">insert the last name</label>
      <input
        value={selectedUser ? selectedUser.lastName : lastName}
        onChange={(e) =>
          selectedUser
            ? setSelectedUser((cur) => ({ ...cur, lastName: e.target.value }))
            : setLastName(e.target.value)
        }
        className="bg-slate-100 p-2 rounded-lg"
        type="text"
        id="lastName"
      />
      <button
        className={
          selectedUser
            ? "bg-sky-700 text-white p-2 rounded-lg font-bold text-lg"
            : "bg-green-700 text-white p-2 rounded-lg font-bold text-lg"
        }
        type="submit"
      >
        {selectedUser ? `EDIT` : `INSERT`}
      </button>
    </form>
  );
}

export default UserForm;
