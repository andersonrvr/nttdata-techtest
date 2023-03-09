import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import moviesReducer from "./modules/movies/reducer";

const reducers = combineReducers({ movies: moviesReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
