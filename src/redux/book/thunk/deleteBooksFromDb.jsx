/* eslint-disable no-unused-vars */
import { deleteBook } from "../actions";

const deleteBooksFromDb = (bookId) => {
    return async (dispatch) => {
        const url = `http://localhost:9000/books/${bookId}`;
        const response = await fetch(url, {
            method: "DELETE",
        });
        // console.log(books);
        dispatch(deleteBook(bookId));
    };
};

export default deleteBooksFromDb;
