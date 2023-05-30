//The admins field to make changes to the books. One to edit that makes it possible to change the names and amount of the books and one to delete books.
//a button to add a new book
import React, { useState } from 'react';

export default function BooksActionField({Bookquantity, Booktitle, newBooklist}) {
    const token = localStorage.getItem('token');
    const [title, setTitle] = useState(Booktitle);
    const [quantity, setQuantity] = useState(0);
    const incrementQuantity = () => {
        if (quantity !== Bookquantity){
            setQuantity(quantity + 1);
        }
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
        fetch('http://localhost:3001/library/user/books', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            setQuantity(0)
            alert(data.message)
            newBooklist(data.context.books)
        })
        .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
        });
        };
    return (
        <td>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
            <button onClick={handleOrder}>Place Order</button>
        </td>
    );
    }
  