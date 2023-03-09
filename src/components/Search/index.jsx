import { useState } from "react";
import "./styles.scss";
import { Button, Input } from "@ui5/webcomponents-react";
import { useDispatch } from "react-redux";
import getMovieThunk from "../../store/modules/movies/thunks";

const Search = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const submitFunction = () => {
    setInputData("");
    if (inputData) {
      return dispatch(getMovieThunk(inputData));
    }
  };
  const resetFunction = () => {
    setInputData("");
    return dispatch(getMovieThunk("reset"));
  };

  return (
    <section className="searchContainer">
      <Input
        style={{
          maxWidth: "400px",
          minWidth: "280px",
        }}
        value={inputData}
        placeholder="Type the name of the movie here."
        onChange={(event) => setInputData(event.target.value)}
      />

      <div className="buttonsContainer">
        <Button
          style={{
            minWidth: "135px",
          }}
          onClick={submitFunction}
        >
          Search
        </Button>
        <Button
          style={{
            minWidth: "135px",
          }}
          onClick={resetFunction}
        >
          Reset
        </Button>
      </div>
    </section>
  );
};

export default Search;
