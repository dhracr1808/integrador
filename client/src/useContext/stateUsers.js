import { createContext, useContext, useEffect, useState } from "react";
import { loggin, isAuth, signup, logout } from "../api/user";
import { UseHookModal } from "./StateModal";

const UsersContext = createContext();

export const UseHookUser = () => useContext(UsersContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ authenticated: false });
  const [status, setStatus] = useState(false);
  const { reset, toggleModal, changeOptions } = UseHookModal();

  const changeStatus = () => {
    setStatus(true);
  };

  const getUser = async () => {
    try {
      const result = await isAuth();
      setUser({ ...result.data, authenticated: true });
      changeStatus();
    } catch (error) {}
  };

  const sendLoggin = async (form) => {
    try {
      await loggin(form);
      getUser();
      reset();
    } catch (error) {
      changeOptions(true);
    }
  };

  const register = async (data) => {
    try {
      await signup(data);
      toggleModal();
    } catch (error) {}
  };

  const signOff = async () => {
    await logout();
    getUser();
    reset();
  };

  useEffect(() => getUser, []);

  return (
    <UsersContext.Provider
      value={{
        user,
        setUser,
        sendLoggin,
        getUser,
        register,
        signOff,
        changeStatus,
        status,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserContextProvider;
