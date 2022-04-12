import axios from "axios";

export const addFavotite = async (id) =>
  await axios.put(`/api/favorites?propertyId=${id}`);

export const getFavorites = async () => await axios.get("/api/favorites/user");
