import { createContext, useContext, useState } from "react";
import { getUser } from "../api/user";

const UsersContext = createContext();

export const UseHookUser = () => useContext(UsersContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const loggin = async (form) => {
    const result = await getUser(form);
    setUser(result.data);
  };

  console.log(user);

  return (
    <UsersContext.Provider value={{ user, setUser, loggin }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserContextProvider;
