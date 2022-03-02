import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/";

const getUsers = (user) => {
  return axios.get(API_URL + "admin/usuarios", { headers: authHeader() });
};

const deleteUser = (idUser) => {
  return axios.delete(API_URL + "admin/usuarios/delete/", {
    headers: authHeader(),
    params: { id: idUser },
  });
};

const updateUser = (data) => {
  return axios.put(
    API_URL + "admin/usuarios/update/",
    {
      ...data,
    },

    { headers: authHeader() }
  );
};

const sendMessage = (message, toUserId) => {
  return axios.post(
    API_URL + "admin/usuarios/message",
    {
      message,
      toUserId,
    },
    { headers: authHeader() }
  );
};

const getMessages = (userId) => {
  return axios.get(API_URL + `usuarios/messages?userId=${userId}`, {
    headers: authHeader(),
  });
};

const Users = {
  getUsers,
  deleteUser,
  updateUser,
  sendMessage,
  getMessages,
};

export default Users;
