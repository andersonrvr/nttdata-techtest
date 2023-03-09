import axios from "axios";
import { toast } from "react-hot-toast";
import { getMovie } from "./actions";

const getMovieThunk = (movie) => (dispatch) => {
  if (movie === "reset") {
    dispatch(getMovie(null));
  } else {
    const replaced = movie.replace(/ /g, "+");
    axios
      .get(`http://www.omdbapi.com/?t=${replaced}&apikey=1958bbb`)
      .then((res) => {
        if (res.data.Error) {
          return toast.error("Movie not found");
        }
        dispatch(getMovie(res.data));
      })
      .catch((err) => dispatch(getMovie(null)));
  }
};

export default getMovieThunk;
