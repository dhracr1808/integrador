import axios from "axios";

export const getProperties = async () => await axios.get("/property");

export const getProperty = async (id) => await axios.get(`/property/${id}`);
