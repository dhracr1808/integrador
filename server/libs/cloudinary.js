import { v2 as cloudinary } from "cloudinary";

import { cloud_name, api_key, api_secret } from "./../config/config";

cloudinary.config({ cloud_name, api_key, api_secret });

export const uploadImage = async (image) => {
  return await cloudinary.uploader.upload(image, {
    folder: "property",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
