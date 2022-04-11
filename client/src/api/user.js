import axios from "axios";

export const getUser = async (data) => axios.post("/users/loggin", data);
