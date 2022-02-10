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

  const removeUser = (idRemove) => {
    Users.deleteUser(idRemove)
      .then(() => {
        const newList = usuarios.filter((user) => user.id !== idRemove);
        setUsuarios(newList);
      })
      .catch((err) => console.log(err.response.data));
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
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <UserRow
                    key={user.id}
                    usuario={user}
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
