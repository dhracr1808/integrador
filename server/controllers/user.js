import { User } from "../models";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    res.send({ err: error.message });
  }
};

export const newUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const loggin = (req, res) => {
  try {
    if (!req.user) return res.sendStatus(402);
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const isAuth = (req, res) => {
  try {
    if (!req.user) return res.sendStatus(204);
    const { id, username, email } = req.user;
    res.status(200).send({ id, username, email });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const Logout = (req, res) => {
  if (!req.user) return res.sendStatus(404);
  req.logout();
  res.sendStatus(200);
};
