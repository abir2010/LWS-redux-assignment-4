import { SEARCHFILTER, SETFORM, TAGFILTER } from "./actionType";

const initialState = {
    tag: "All",
    search: "",
    formContent: {},
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAGFILTER:
            return {
                ...state,
                tag: action.payload,
            };

        case SEARCHFILTER:
            return {
                ...state,
                search: action.payload,
            };

        case SETFORM:
            return {
                ...state,
                formContent: action.payload,
            };

        default:
            return state;
    }
};

export default filterReducer;
