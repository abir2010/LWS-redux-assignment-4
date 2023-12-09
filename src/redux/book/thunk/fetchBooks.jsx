/* eslint-disable no-unused-vars */
import { loadBooks } from "../actions";

const fetchBooks = async (dispatch, getState) => {
    const url = "http://localhost:9000/books";
    const response = await fetch(url);
    const books = await response.json();
    // console.log(books);

    dispatch(loadBooks(books));
};

export default fetchBooks;
