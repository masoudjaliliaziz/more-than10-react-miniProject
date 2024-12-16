import React from "react";

function UserTrow({ user }) {
  return (
    <>
      {user.map((u) => {
        return (
          <tr className="text-center p-3 border-2" key={u.id}>
            <td className="border-2">{u.id}</td>
            <td className="border-2">{u.name}</td>
            <td className="border-2">{u.lastName}</td>
          </tr>
        );
      })}
    </>
  );
}

export default UserTrow;
