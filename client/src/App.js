import Home from "./pages/Home";
import Navabar from "./components/Navbar";
import ModalContextProvider from "./useContext/StateModal";
import UsersProvider from "./useContext/stateUsers";
import Routerapp from "./RoutesApp";
import FavoriteContextProvider from "./useContext/stateFavorite";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ModalContextProvider>
      <UsersProvider>
        <Navabar />
        <FavoriteContextProvider>
          <Routerapp />
          <Toaster />
        </FavoriteContextProvider>
      </UsersProvider>
    </ModalContextProvider>
  );
}

export default App;
