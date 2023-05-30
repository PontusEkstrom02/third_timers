import React, { useState, useEffect } from "react";
import UserActionField from "./userActionField";

export default function UserTable({ search }) {
  const [userlist, setUserlist] = useState([]);
  const [filteredUserlist, setFilteredUserlist] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3001/admin/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserlist(data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredUserlist(userlist);
    } else {
      const filteredList = userlist.filter((user) =>
        user.username.includes(search)
      );
      setFilteredUserlist(filteredList);
    }
  }, [search, userlist]);

  const calculateTotalPurchases = (purchases) => {
    let total = 0;
    if (Array.isArray(purchases)) {
      purchases.forEach((purchase) => {
        total += purchase.quantity;
      });
    }
    return total;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Purchases</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredUserlist.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{calculateTotalPurchases(user.purchases) + " purchases"}</td>
            <UserActionField
              userId={user.username}
              setupdatedUserList={setUserlist}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
