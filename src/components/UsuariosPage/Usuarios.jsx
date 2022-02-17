import { useEffect, useState } from "react";
import Users from "../../services/users";
import UserRow from "./UserRow";
import NewUser from "./NewUser";

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

  const handleNew = async () => {
    const res = await Users.getUsers();
    const users = res.data;
    setUsuarios(users);
  };

  const handleUpdate = async (userUpdate) => {
    try {
      await Users.updateUser(userUpdate);

      let newUsers = usuarios.map((user) => {
        if (user.id === userUpdate.id) {
          return userUpdate;
        }
        return user;
      });

      setUsuarios(newUsers);
    } catch (err) {
      console.log(err);
    }
  };

  const removeUser = async (idRemove) => {
    try {
      await Users.deleteUser(idRemove);

      const newUsers = usuarios.filter((user) => user.id !== idRemove);

      setUsuarios(newUsers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container ">
      <div className="jumbotron">
        <div className="d-flex  justify-content-between  align-items-center">
          <h1>Usuarios</h1>
          <NewUser handleNew={handleNew}></NewUser>
        </div>
        {usuarios && (
          <>
            <table className="table table-striped">
              <thead>
                <tr className="text-center">
                  <th scope="col ">ID</th>
                  <th scope="col ">Usuario</th>
                  <th scope="col ">Rol</th>
                  <th scope="col ">Email</th>
                  <th scope="col ">Contraseña</th>
                  <th scope="col ">Acciones</th>
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
