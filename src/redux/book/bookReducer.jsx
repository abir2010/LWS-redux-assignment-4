/* eslint-disable no-case-declarations */
import { ADDBOOK, DELETEBOOK, LOADBOOKS, UPDATEBOOK } from "./actionTypes";
import { initailState } from "./initialState";

const nextID = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
};

const bookReducer = (state = initailState, action) => {
    switch (action.type) {
        case LOADBOOKS:
            return [...action.payload];

        case ADDBOOK:
            return [
                ...state,
                {
                    ...action.payload,
                    id: nextID(state),
                },
            ];

        case DELETEBOOK:
            return state.filter((book) => book.id !== action.payload);

        case UPDATEBOOK:
            return state.map((book) => {
                if (book.id !== action.payload.bookId) {
                    return book;
                } else {
                    return {
                        ...book,
                        ...action.payload.updatedBookData,
                    };
                }
            });

        default:
            return state;
    }
};

export default bookReducer;
