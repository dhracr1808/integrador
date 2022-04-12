import axios from "axios";

export const getProperties = async () => await axios.get("/api/property");

export const getProperty = async (id) => await axios.get(`/api/property/${id}`);
