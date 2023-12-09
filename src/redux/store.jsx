import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware());

export default store;
