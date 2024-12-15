import { list } from "postcss";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((cur) => !cur);
  }
  function handleSelection(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onClick={handleSelection}
        />
        {showAddFriend && (
          <FormAddFriend
            setFriends={setFriends}
            onHideForm={setShowAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
function FriendList({ friends, onClick, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            onClick={onClick}
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
function Friend({ friend, onClick, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  console.log(isSelected);
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* start conditional rendering--------------------- */}
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {-friend.balance}$
        </p>
      )}
      {friend.balance == 0 && <p>you and {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}$
        </p>
      )}
      {/* finish conditional rendering ----------------------*/}
      <Button onClick={() => onClick(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
function FormAddFriend({ setFriends, onHideForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    setFriends((e) => [...e, newFriend]);
    onHideForm(false);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          onSplitBill;
        }}
      />
      <label htmlFor="">Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
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
export default App;
