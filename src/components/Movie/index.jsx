import { Button } from "@ui5/webcomponents-react";
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./styles.scss";

const MovieInfo = () => {
  const { movies } = useSelector((state) => state);

  return (
    <section className="movieContainer">
      {movies ? (
        <>
          <div className="infoMovie">
            <h2>{movies.Title}</h2>
            <p>{movies.Plot}</p>
            <p>
              <span>Actors:</span> {movies.Actors}
            </p>
            <p className="review">
              <span>Review:</span> <AiFillStar /> {movies.imdbRating}/10
            </p>
            <Button style={{ fontWeight: "700" }}>
              Favorite <FiHeart />
            </Button>
          </div>
          <div>
            <figure>
              <img src={movies.Poster} alt={movies.Title} />
            </figure>
          </div>
        </>
      ) : (
        <div className="withoutMovie">Do your research in the input above.</div>
      )}
    </section>
  );
};
export default MovieInfo;
