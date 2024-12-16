import React from "react";

function UserTrow({ user, onDeleteUser, onupdateUser }) {
  return (
    <>
      {user.map((u) => {
        return (
          <tr className="text-center p-3 border-2" key={u.id}>
            <td className="border-2">{u.id}</td>
            <td className="border-2">{u.name}</td>
            <td className="border-2">{u.lastName}</td>
            <td className=" flex items-center justify-center gap-2">
              <button
                onClick={() => onDeleteUser(u)}
                className="bg-red-700 p-2 rounded-md text-white font-bold text-xs"
              >
                delete
              </button>
              <button
                onClick={() => onupdateUser(u)}
                className="bg-sky-700 p-2 rounded-md text-white font-bold text-xs"
              >
                Update
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default UserTrow;
