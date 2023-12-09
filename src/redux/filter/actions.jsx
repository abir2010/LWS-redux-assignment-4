import { SEARCHFILTER, SETFORM, TAGFILTER } from "./actionType";

export const tagFilter = (tag) => {
    return {
        type: TAGFILTER,
        payload: tag,
    };
};

export const searchFilter = (text) => {
    return {
        type: SEARCHFILTER,
        payload: text,
    };
};

export const setForm = (book) => {
    return {
        type: SETFORM,
        payload: book,
    };
};
