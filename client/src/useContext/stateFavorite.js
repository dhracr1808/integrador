import { createContext, useContext, useEffect, useState } from "react";
import { addFavotite, getFavorites } from "../api/favorites";
import { UseHookUser } from "./stateUsers";

const FavoriteContext = createContext();

export const UseHookFavorites = () => useContext(FavoriteContext);

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = UseHookUser();

  const getAllfavorites = async () => {
    try {
      if (!user.authenticated) return;
      const result = await getFavorites();
      setFavorites(result.data);
    } catch (error) {
      console.log("error");
    }
  };

  const newFavorite = async (id) => {
    await addFavotite(id);
    getAllfavorites();
  };

  useEffect(() => getAllfavorites, [user]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, setFavorites, getAllfavorites, newFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
