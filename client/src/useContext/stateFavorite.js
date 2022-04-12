import { createContext, useContext, useEffect, useState } from "react";
import { addFavotite, getFavorites, removeFavorite } from "../api/favorites";
import { UseHookUser } from "./stateUsers";

const FavoriteContext = createContext();

export const UseHookFavorites = () => useContext(FavoriteContext);

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user, status } = UseHookUser();

  console.log(favorites);

  const getAllfavorites = async () => {
    try {
      /*   if (!status) return; */
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

  const deleteFavorite = async (id) => {
    await removeFavorite(id);
    getAllfavorites();
  };

  useEffect(() => getAllfavorites, [user]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
        getAllfavorites,
        newFavorite,
        deleteFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
