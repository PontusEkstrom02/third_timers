//The button to change the admin table view from user to books
import { Link } from "react-router-dom"
export default function booksTableBtn(){

    return(
        <Link to="../AdminBookPage">
            <button>Books</button>
        </Link>
    )
}
