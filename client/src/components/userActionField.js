//Promotion button och delete button for the users field page for admins to change the users information
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
