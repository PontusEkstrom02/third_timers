/*
* This file is a component file for rendering an order column available on the user and administrator view. 
* It contains increment and decrement buttons for deciding order quantity aswell as an order button for placing orders.
*/

import React, { useState } from "react";
import "./addEditPopUp.css";
import "./orderField.css"

export default function BooksOrderField({
  Bookquantity,
  Booktitle,
  newBooklist,
}) {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState(Booktitle);
  const [quantity, setQuantity] = useState(0);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const userData = {
    title: title,
    quantity: quantity,
  };

  const handleOrder = () => {
    fetch("http://localhost:3001/library/user/books", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === "Not enough quantity") {
          alert(data.error);
        } else {
          setQuantity(0);
          alert(data.message);
          newBooklist(data.context.books);
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  return (
    <td>
      <button className="increase-btn" onClick={decrementQuantity}>
        -
      </button>
      <span className="quantity-span">{quantity}</span>
      <button className="decrease-btn" onClick={incrementQuantity}>
        +
      </button>
      <button className="order-btn" onClick={handleOrder}>
        Place Order
      </button>
    </td>
  );
}
