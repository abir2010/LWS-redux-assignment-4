import { ADDBOOK, DELETEBOOK, LOADBOOKS, UPDATEBOOK } from "./actionTypes";

export const addBook = (bookData) => {
    return {
        type: ADDBOOK,
        payload: bookData,
    };
};

export const loadBooks = (books) => {
    return {
        type: LOADBOOKS,
        payload: books,
    };
};

export const deleteBook = (bookId) => {
    return {
        type: DELETEBOOK,
        payload: bookId,
    };
};

export const updateBook = (bookId, updatedBookData) => {
    return {
        type: UPDATEBOOK,
        payload: { bookId, updatedBookData },
    };
};
