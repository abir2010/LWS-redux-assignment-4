/* eslint-disable no-unused-vars */
import { addBook, loadBooks } from "../actions";

const addBookToDb = (bookData) => {
    return async (dispatch, getState) => {
        const url = "http://localhost:9000/books";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(bookData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const books = await response.json();
        // console.log(books);

        dispatch(addBook(books));
    };
};

export default addBookToDb;
