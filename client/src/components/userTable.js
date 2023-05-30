//The admin view of the users table/info
export default function userTable(){
  //https://gyazo.com/40453cd4ddecbfacd3580206ece71f2e
  fetch('http://localhost:3001/admin/users', {
    method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    // Hantera fel här
    console.error(error);
  });

    return(
      <table>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Purchases</th>
        </tr>
        <tr>
          <td>testens von testare</td>
          <td>TEST</td>
          <td>3 purchases</td>
        </tr>
      </table>
    )
}
