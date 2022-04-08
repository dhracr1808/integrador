import { Property } from "../models";

export const getProperties = async (req, res) => {
  try {
    const properties = await Property.findAll();
    res.send(properties);
  } catch (error) {
    res.send({ err: error.message });
  }
};

export const createProperty = async (req, res) => {
  try {
    const newpropertie = await Property.create(req.body);
    res.send(newpropertie);
  } catch (error) {
    res.send({ err: error.message });
  }
};
