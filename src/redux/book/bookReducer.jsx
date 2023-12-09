/* eslint-disable no-case-declarations */
import { ADDBOOK, DELETEBOOK, UPDATEBOOK } from "./actionTypes";
import { initailState } from "./initialState";

const nextID = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
};

const bookReducer = (state = initailState, action) => {
    switch (action.type) {
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
            let singleBook = state.find(
                (book) => book.id === action.payload.bookId
            );

            singleBook = {
                ...action.payload.updatedBookData,
                id: action.payload.bookId,
            };

            const updatedState = state.filter(
                (book) => book.id !== action.payload.bookId
            );

            updatedState.push(singleBook);

            return updatedState;

        default:
            return state;
    }
};

export default bookReducer;
