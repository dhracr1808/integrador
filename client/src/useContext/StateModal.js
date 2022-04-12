import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const UseHookModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({
    home: true,
    status: false,
    option: true,
  });

  const toggleModal = (isHome) => {
    setModal({ ...modal, home: !isHome ? true : false, status: !modal.status });
  };

  const changeOptions = (value) => {
    return setModal({ ...modal, option: value ? true : false });
  };

  const reset = () => {
    setModal({ home: true, status: false, option: true });
  };

  return (
    <ModalContext.Provider
      value={{ ...modal, setModal, toggleModal, changeOptions, reset }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
