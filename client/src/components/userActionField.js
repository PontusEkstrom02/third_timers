//Promotion button och delete button for the users field page for admins to change the users information
import React, {useState} from "react";
export default function UserActionField({userId, setupdatedUserList}) {
    const token = localStorage.getItem('token');
    const [username, setUsername] = useState(userId);

    const userData = {
        username: username,
    };
    const promoteUser = () =>{
        fetch('http://localhost:3001/admin/users', {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message)
            setupdatedUserList(data.context.users)
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const deleteUser = () =>{
        fetch('http://localhost:3001/admin/users', {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message)
            setupdatedUserList(data.context.users)
        })
        .catch((error) => {
            console.error(error);
        });
    };

  return (
    <td>
      <button onClick={promoteUser}>Promote</button>
      <button onClick={deleteUser}>Delete</button>
    </td>
  );
}

