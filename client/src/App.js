import Home from "./pages/Home";
import Navabar from "./components/Navbar";
import ModalContextProvider from "./useContext/StateModal";
import UsersProvider from "./useContext/stateUsers";
import { Route, Routes } from "react-router-dom";
import Loggin from "./components/Loggin";

function App() {
  return (
    <UsersProvider>
      <ModalContextProvider>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loggin" element={<Loggin />}></Route>
        </Routes>
      </ModalContextProvider>
    </UsersProvider>
  );
}

export default App;
