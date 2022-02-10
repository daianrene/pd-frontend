import axios from "axios";
const API_URL = "http://localhost:8080/api/";

const getUsers = (user) => {
  return axios.get(API_URL + "admin/usuarios", {
    user,
  });
};

const deleteUser = (idUser) => {
  return axios.delete(API_URL + "admin/usuarios/delete/", {
    params: { id: idUser },
  });
};

const updateUser = (data) => {
  return axios.put(API_URL + "admin/usuarios/update/", {
    ...data,
  });
};

const Users = {
  getUsers,
  deleteUser,
  updateUser,
};

export default Users;
