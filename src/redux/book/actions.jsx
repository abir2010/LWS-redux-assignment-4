import { ADDBOOK, DELETEBOOK, UPDATEBOOK } from "./actionTypes";

export const addBook = (bookData) => {
    return {
        type: ADDBOOK,
        payload: bookData,
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
