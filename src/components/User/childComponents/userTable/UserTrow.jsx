import React from "react";

function UserTrow({ user, onDeleteUser }) {
  return (
    <>
      {user.map((u) => {
        return (
          <tr className="text-center p-3 border-2" key={u.id}>
            <td className="border-2">{u.id}</td>
            <td className="border-2">{u.name}</td>
            <td className="border-2">{u.lastName}</td>
            <td>
              <button
                onClick={() => onDeleteUser(u)}
                className="bg-red-700 p-1 rounded-md text-white font-bold text-xs"
              >
                delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default UserTrow;
