import Home from "./pages/Home";
import Navabar from "./components/Navbar";
import ModalContextProvider from "./useContext/StateModal";
import UsersProvider from "./useContext/stateUsers";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <ModalContextProvider>
      <UsersProvider>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </UsersProvider>
    </ModalContextProvider>
  );
}

export default App;
