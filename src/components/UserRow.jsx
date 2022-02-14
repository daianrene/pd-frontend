import { useEffect, useState } from "react";
import Users from "../services/users";

const UserRow = ({ usuario, handleRemove }) => {
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setUser(usuario);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const prom = await Users.updateUser(user);
      console.log(prom);
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return user ? (
    <>
      <tr className="text-center">
        <th scope="row">{user.id}</th>
        {!edit ? (
          <>
            <td>{user.username}</td>
            <td>{user.rol.toUpperCase()}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              {/* <div className="btn " onClick={() => {}}>
              ✉
            </div> */}
              <div className="btn mx-2" onClick={() => setEdit(!edit)}>
                ✏️
              </div>
              <div className="btn " onClick={() => handleRemove(user.id)}>
                ❌
              </div>
            </td>
          </>
        ) : (
          <>
            <td>
              <input
                type="text"
                value={user.username}
                name="username"
                onChange={handleChange}
              />
            </td>
            <td>{user.rol.toUpperCase()}</td>
            <td>
              <input value={user.email} name="email" onChange={handleChange} />
            </td>
            <td>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </td>
            <td>
              <div className="btn mx-2" onClick={handleUpdate}>
                ✅
              </div>
              <div
                className="btn"
                onClick={() => {
                  setEdit(!edit);
                  setUser(usuario);
                }}
              >
                ❌
              </div>
            </td>
          </>
        )}
      </tr>
    </>
  ) : (
    <></>
  );
};

export default UserRow;
