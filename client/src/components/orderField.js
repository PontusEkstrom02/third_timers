import React, { useState } from "react";
import "./orderField.css";

function OrderField() {
  const [order, setOrder] = useState(0);

  const incrementOrder = () => {
    setOrder(order + 1);
  };

  const decrementOrder = () => {
    setOrder(order - 1);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="order-section">
            <button className="incrementBook" onClick={incrementOrder}>
              +
            </button>
            <p>{order}</p>
            <button className="decrementBook" onClick={decrementOrder}>
              -
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default OrderField;
