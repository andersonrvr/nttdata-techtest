import { GET_MOVIES } from "./actionTypes";

const moviesReducer = (state = null, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.movie;
    default:
      return state;
  }
};

export default moviesReducer;
