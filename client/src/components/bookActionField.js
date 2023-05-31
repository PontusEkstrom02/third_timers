import React, { useEffect, useState} from "react"
export default function BooksActionField({Bookquantity, Booktitle, BookAuthor}){
    return(
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    )
}