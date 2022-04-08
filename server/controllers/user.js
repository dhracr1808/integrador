import { User } from "../models";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    res.send({ err: error.message });
  }
};
