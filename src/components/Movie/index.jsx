import { Button } from "@ui5/webcomponents-react";

import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./styles.scss";
import "@ui5/webcomponents-icons/dist/heart-2.js";
import "@ui5/webcomponents-icons/dist/heart.js";
import "@ui5/webcomponents-icons/dist/favorite";
import { useEffect, useState } from "react";

const MovieInfo = () => {
  const { movies } = useSelector((state) => state);
  const [favorited, setFavorited] = useState(false);
  useEffect(() => {
    setFavorited(false);
  }, [movies]);
  return (
    <section className="movieContainer">
      {movies ? (
        <>
          <div className="infoMovie">
            <h2>{movies.Title}</h2>
            <p>
              {movies.Plot === "N/A"
                ? "No description available."
                : movies.Plot}
            </p>
            <p>
              <span>Actors:</span>{" "}
              {movies.Actors === "N/A"
                ? "No actors list available."
                : movies.Actors}
            </p>
            <p className="review">
              <span>Review:</span>{" "}
              {movies.imdbRating === "N/A" ? (
                "No review available."
              ) : (
                <>
                  <AiFillStar /> {movies.imdbRating}/10
                </>
              )}
            </p>
            <Button
              icon={favorited ? "heart" : "heart-2"}
              iconEnd={true}
              style={{
                fontWeight: "700",
              }}
              onClick={() =>
                favorited ? setFavorited(false) : setFavorited(true)
              }
            >
              Favorite
            </Button>
            {/* <FiHeart /> */}
          </div>
          <div>
            <figure>
              <img src={movies.Poster} alt={movies.Title} />
            </figure>
          </div>
        </>
      ) : (
        <div className="withoutMovie">
          <p>Do your research in the input above.</p>
          <img
            alt="Search movie icon"
            src="https://cdn2.iconfinder.com/data/icons/interactive-shadow-pack/100/_-8-512.png"
          />
        </div>
      )}
    </section>
  );
};
export default MovieInfo;
