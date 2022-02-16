import { useEffect, useState } from "react";
import Users from "../services/users";
import { Link } from "react-router-dom";
import UserRow from "./UserRow";

const Profile = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const initial = async () => {
      const res = await Users.getUsers();
      const users = res.data;
      setUsuarios(users);
    };

    initial();
  }, []);

  const handleUpdate = async (userUpdate) => {
    try {
      const prom = await Users.updateUser(userUpdate);

      let newUsers = usuarios.filter((user) => userUpdate.id !== user.id);
      newUsers.push(userUpdate);
      newUsers = newUsers.sort((u1, u2) => u1.id - u2.id);
      setUsuarios(newUsers);
    } catch (err) {
      console.log(err);
    }
  };

  const removeUser = async (idRemove) => {
    try {
      const prom = await Users.deleteUser(idRemove);

      const newUsers = usuarios
        .filter((user) => user.id !== idRemove)
        .sort((u1, u2) => u1.id < u2.id);
      setUsuarios(newUsers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container ">
      <Link to={"/user/nuevo"}>
        <button className="btn btn-success my-4">Nuevo Usuario</button>
      </Link>
      <div className="jumbotron">
        <h1>Usuarios</h1>
        {usuarios && (
          <>
            <table className="table table-striped">
              <thead>
                <tr className="text-center">
                  <th scope="col text-center">ID</th>
                  <th scope="col text-center">Usuario</th>
                  <th scope="col text-center">Rol</th>
                  <th scope="col text-center">Email</th>
                  <th scope="col text-center">Contraseña</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <UserRow
                    key={user.id}
                    usuario={user}
                    handleUpdate={handleUpdate}
                    handleRemove={removeUser}
                  />
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
export default Profile;
