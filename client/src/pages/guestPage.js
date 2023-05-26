//This file should show the guest the books and its info with a search bar and a sign in button.
import SearchBar from "../components/searchBar"
import BooksTable from "../components/booksTable"
export default function adminUserPage() {
    return(
        <div>
            <SearchBar placeholder="Search query..."/>
            <BooksTable />
        </div>
    )
}
