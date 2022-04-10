import Home from "./pages/Home";
import Navabar from "./components/Navbar";
import ModalContextProvider from "./useContext/StateModal";

function App() {
  return (
    <ModalContextProvider>
      <Navabar />
      <Home />
    </ModalContextProvider>
  );
}

export default App;
