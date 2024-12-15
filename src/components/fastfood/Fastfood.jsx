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
  //   function handleAddToCart(value) {
  //     let existItem = orderedItem.find((val) => val.id === value.id);
  //     if (existItem) {
  //       let updatedItem = orderedItem.filter((item) => item !== existItem);
  //       setOrderedItem([
  //         ...updatedItem,
  //         { ...existItem, quantity: existItem.quantity + 1 },
  //       ]);
  //     }else{
  //           setOrderedItem((vals) => [...vals, value]);
  //     }

  //   }
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

  return (
    <div>
      <Menu menuItem={menuItem} onAddToCart={handleAddToCart} />
      <Cart orderedItem={orderedItem} />
    </div>
  );
}

export default Fastfood;
