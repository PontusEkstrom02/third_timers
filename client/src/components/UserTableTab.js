//The buttom to change the admin table view from books to user
import { Link } from "react-router-dom"
export default function userTableBtn(){

    return(
        <Link to="../AdminUserPage">
            <button>Users</button>
        </Link>
    )
}
