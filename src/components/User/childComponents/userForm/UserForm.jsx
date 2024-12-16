import React, { useState } from "react";

function UserForm({ users, setUsers }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const idArr = users.map((u) => u.id);
    const id = Math.max(...idArr) + 1;
    setUsers((cur) => [...cur, { id, name, lastName }]);
    setName("");
    setLastName("");
  }

  return (
    <form
      className="w-7/12 flex flex-col mx-auto gap-3  "
      action=""
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">insert the name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-slate-100 p-2 rounded-lg"
        type="text"
        id="name"
      />
      <label htmlFor="lastName">insert the last name</label>
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="bg-slate-100 p-2 rounded-lg"
        type="text"
        id="lastName"
      />
      <button
        className="bg-green-700 text-white p-2 rounded-lg font-bold text-lg"
        type="submit"
      >
        insert
      </button>
    </form>
  );
}

export default UserForm;
