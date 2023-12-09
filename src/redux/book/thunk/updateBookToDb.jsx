/* eslint-disable no-unused-vars */
import { updateBook } from "../actions";

const updateBookToDb = (bookId, bookData) => {
    return async (dispatch) => {
        const url = `http://localhost:9000/books/${bookId}`;
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(bookData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const books = await response.json();
        // console.log(books);
        dispatch(updateBook(bookId, bookData));
    };
};

export default updateBookToDb;
