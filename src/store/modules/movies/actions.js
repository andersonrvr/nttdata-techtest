import { type } from "@testing-library/user-event/dist/type";
import { GET_MOVIES } from "./actionTypes";

export const getMovie = (movie) => ({
  type: GET_MOVIES,
  movie,
});
