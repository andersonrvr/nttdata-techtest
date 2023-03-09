import "./styles.scss";
import TitleHome from "../../components/Title";
import Search from "../../components/Search";

import MovieInfo from "../../components/Movie";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="header"></div>
        <TitleHome />
        <Search />
        <MovieInfo />
      </div>
      <Footer />
    </>
  );
};
export default Home;
