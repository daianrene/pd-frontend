import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/";

const getUsers = () => {
  return axios.get(API_URL + "admin/usuarios", { headers: authHeader() });
};

const getConserjes = () => {
  return axios.get(API_URL + "admin/conserjes", { headers: authHeader() });
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
  return axios.get(API_URL + `usuarios/messages`, {
    headers: authHeader(),
  });
};

const getAllMessages = () => {
  return axios.get(API_URL + `admin/allmessages`, {
    headers: authHeader(),
  });
};

const addReporte = (reporte) => {
  return axios.put(
    API_URL + "usuarios/addreporte",
    {
      ...reporte,
    },
    {
      headers: authHeader(),
    }
  );
};

const getReportes = (userId) => {
  return axios.get(API_URL + `usuarios/reportes`, {
    headers: authHeader(),
  });
};

const getAllReportes = () => {
  return axios.get(API_URL + `admin/allreportes`, {
    headers: authHeader(),
  });
};

const readMessage = (idMessage) => {
  return axios.put(
    API_URL + `usuarios/readmessage`,
    { idMessage },
    {
      headers: authHeader(),
    }
  );
};

const Users = {
  getUsers,
  getConserjes,
  deleteUser,
  updateUser,
  sendMessage,
  getMessages,
  getAllMessages,
  addReporte,
  getReportes,
  getAllReportes,
  readMessage,
};

export default Users;
