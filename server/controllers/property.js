import { Category, Property } from "../models";
import { uploadImage, deleteImage } from "../libs/cloudinary";
import fs from "fs-extra";
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.findAll({
      include: { model: Category, as: "category" },
    });
    res.send(properties);
  } catch (error) {
    res.send({ err: error.message });
  }
};

export const getProperty = async (req, res) => {
  try {
    const properties = await Property.findByPk(req.params.id, {
      include: { model: Category, as: "category" },
    });

    properties ? res.json(properties) : res.sendStatus(404);
  } catch (error) {
    res.send({ err: error.message });
  }
};

export const createProperty = async (req, res) => {
  try {
    const category = {};
    let image;
    if (req.files?.image) {
      const { secure_url, public_id } = await uploadImage(
        req.files.image.tempFilePath
      );
      await fs.remove(req.files.image.tempFilePath);
      image = { secure_url, public_id };
    }

    const newpropertie = await Property.create({ ...req.body, image });
    res.send(newpropertie);
  } catch (error) {
    res.send({ err: error.message });
  }
};

export const deleteProperty = async (req, res) => {
  try {
    const removeImage = await Property.findByPk(req.params.id);
    const propertyRemoved = await Property.destroy({
      where: { id: req.params.id },
    });
    if (!propertyRemoved) return res.sendStatus(404);

    if (removeImage.image) await deleteImage(removeImage.image.public_id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
