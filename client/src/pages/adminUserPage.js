/*This file will render an admin view with all available user categories a search bar, a sign out button and two buttons for promoting  or deleting a user.
There will also be a tab for changing tables for user and book view.*/
import BooksTableTab from "../components/booksTableTab"
import UserTableTab from "../components/userTableTab"
import UserTable from "../components/userTable"
export default function adminUserPage() {
    return(
        <div>
            <BooksTableTab />
            <UserTableTab />
            <UserTable />
        </div>
    )
}
