/*
 * This file is a component file which is used for rendering and handling users settings logic.
 * The code can be improved by using, a method currently unknown to better position the pop up window as it now needs position absolute.
 * Another way of improvement would be to move the logic of the pop up screen to a separate component. 
 * That would likely allow better control of handling where of the page the pop ur renders. 
*/
import React, { useState } from "react";
import "./userActionField.css"
export default function UserActionField({ userId, setupdatedUserList }) {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState(userId);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [actionType, setActionType] = useState(""); // "promote" or "delete"

  const userData = {
    username: username,
  };

  const handleActionConfirmation = () => {
    if (actionType === "promote") {
      promoteUser();
    } else if (actionType === "delete") {
      deleteUser();
    }
    setShowConfirmPopup(false);
  };

  const promoteUser = () => {
    fetch("http://localhost:3001/admin/users", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setupdatedUserList(data.context.users);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteUser = () => {
    fetch("http://localhost:3001/admin/users", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setupdatedUserList(data.context.users);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePromoteClick = () => {
    setActionType("promote");
    setShowConfirmPopup(true);
  };

  const handleDeleteClick = () => {
    setActionType("delete");
    setShowConfirmPopup(true);
  };

  return (
    <td>
      <button onClick={handlePromoteClick} className="Edit-btn">Promote</button>
      <button onClick={handleDeleteClick} className="Delete-btn">Delete</button>
      {showConfirmPopup && (<div class="Gray"></div>)}
      {showConfirmPopup && (
          <div className="popup-content-user">
            <h3>Change user setting</h3>
            <p>Are you sure you wish to {actionType} user {userId}?</p>
            <button onClick={handleActionConfirmation} className="Proceed-btn">Proceed</button>
            <button onClick={() => setShowConfirmPopup(false)} className="cancel-btn">Cancel</button>
          </div>
      )}
    </td>
  );
}
