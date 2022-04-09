import { User } from "../models";

export const favorites = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findByPk(id);
    const favoritos = await user.getFavorites();
    res.send(favoritos);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const addFavoriteProp = async (req, res) => {
  try {
    const { propertyId } = req.query;
    const { id } = req.user;
    const user = await User.findByPk(id);
    await user.addFavorite(propertyId);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const { propertyId } = req.query;
    const { id } = req.user;
    const user = await User.findByPk(id);
    const remove = await user.removeFavorite(propertyId);
    if (!remove) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
