import Slider from "../commons/Slider";
import Content from "../components/Content";
import FavoriteContextProvider from "../useContext/stateFavorite";

const Home = () => {
  return (
    <FavoriteContextProvider>
      <Slider />
      <Content />
    </FavoriteContextProvider>
  );
};

export default Home;
