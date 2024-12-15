import React, { useState } from "react";
import Menu from "./childComponents/Menu";
import Cart from "./childComponents/Cart";

function Fastfood() {
  const menuItem = [
    {
      id: 1,
      name: "Burger",
      description:
        "our special house sauce, all served on a toasted brioche bun. Perfectly crafted for burger lovers! 🍔",
      price: 25,
      quantity: 1,
      img: "src/components/fastfood/assets/img/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai.jpg",
    },
    {
      id: 2,
      name: "pizaa",
      description:
        "our special house sauce, all served on a toasted brioche bun. Perfectly crafted for burger lovers! 🍔",
      price: 30,
      quantity: 1,
      img: "src/components/fastfood/assets/img/pizza-pizza-filled-with-tomatoes-salami-olives.jpg",
    },
  ];
  const [orderedItem, setOrderedItem] = useState([]);

  function handleAddToCart(value) {
    setOrderedItem((prevItems) => {
      const existItem = prevItems.find((item) => item.id === value.id);

      if (existItem) {
        return prevItems.map((item) =>
          item.id === value.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, value];
      }
    });
  }
  function handleQuantity(value) {
    setOrderedItem((prevItem) => {
      const UpdatedItems = prevItem.map((item) =>
        item.id === value.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return UpdatedItems.filter((item) => item.quantity !== 0);
    });
  }
  return (
    <div>
      <Menu menuItem={menuItem} onAddToCart={handleAddToCart} />
      <Cart orderedItem={orderedItem} onClick={handleQuantity} />
    </div>
  );
}

export default Fastfood;
