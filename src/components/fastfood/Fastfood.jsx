import React from "react";
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
  ];
  return (
    <div>
      <Menu menuItem={menuItem} />
      <Cart />
    </div>
  );
}

export default Fastfood;
