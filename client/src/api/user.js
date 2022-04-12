import axios from "axios";

export const loggin = async (data) => axios.post("/api/users/loggin", data);
export const isAuth = async () => axios.get("/api/users/auth");
export const signup = async (data) => axios.post("/api/users", data);
export const logout = async () => axios.post("/api/users/logout");
