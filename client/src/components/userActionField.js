/*
 * This file is a component is used for rendering and handeling the users settings logic and rendering.
 * the code is mostly good but needs a better way to render the popup as now it needs position absolut
 * to be able to render outside the action field in the table so just having the logic on another componen
 * or to have it in the userTable would allow for better handeling of the popup
*/
import React, { useState } from "react";

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
      <button onClick={handlePromoteClick}>Promote</button>
      <button onClick={handleDeleteClick}>Delete</button>

      {showConfirmPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Change user setting</h3>
            <p>Are you sure you wish to {actionType} user {userId}?</p>
            <button onClick={handleActionConfirmation}>Proceed</button>
            <button onClick={() => setShowConfirmPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </td>
  );
}
