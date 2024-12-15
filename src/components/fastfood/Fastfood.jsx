import React, { useState } from "react";
import Menu from "./childComponents/Menu";
import Cart from "./childComponents/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  let calcTotalPrice = 0;

  orderedItem.forEach((el) => {
    calcTotalPrice += el.price * el.quantity;
  });

  function handleOrder() {
    toast.success("order Completed", {
      position: "top-center",
    });

    setTimeout(() => {
      setOrderedItem([]);
    }, 2500);
  }
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
      <ToastContainer autoClose={2000} />
      <Menu menuItem={menuItem} onAddToCart={handleAddToCart} />
      {orderedItem.length > 0 && (
        <>
          <Cart
            orderedItem={orderedItem}
            onClick={handleQuantity}
            totalPrice={calcTotalPrice}
          />

          <button
            className="bg-green-600 text-white font-bold p-3 rounded-md hover:bg-green-800 mt-10 mx-10"
            onClick={handleOrder}
          >
            order
          </button>
        </>
      )}
    </div>
  );
}

export default Fastfood;
