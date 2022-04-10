import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const UseHookModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <ModalContext.Provider value={{ modal, setModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
