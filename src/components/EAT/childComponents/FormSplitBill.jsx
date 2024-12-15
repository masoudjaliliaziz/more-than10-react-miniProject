import React, { useState } from "react";
import Button from "./Button";
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paiedByUser, setPaiedByUser] = useState("");
  const paiedByFriend = bill ? bill - paiedByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paiedByUser) return;
    onSplitBill(whoIsPaying === "user" ? paiedByFriend : -paiedByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">Iyour expense</label>
      <input
        type="text"
        value={paiedByUser}
        onChange={(e) =>
          setPaiedByUser(
            Number(e.target.value) > bill ? paiedByUser : Number(e.target.value)
          )
        }
      />
      <label htmlFor="">{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paiedByFriend} />
      <label htmlFor="">who is paying the bill</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
