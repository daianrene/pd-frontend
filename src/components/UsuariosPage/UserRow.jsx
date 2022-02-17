import { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const UserRow = ({ usuario, handleRemove, handleUpdate }) => {
  const [user, setUser] = useState([]);
  const [userUpdate, setUserUpdate] = useState([]);

  const [showMsg, setShowMsg] = useState(false);
  const [showUpdt, setShowUpdt] = useState(false);

  const toggleShowMsg = () => setShowMsg(!showMsg);

  const toggleShowUpdt = () => setShowUpdt(!showUpdt);

  useEffect(() => {
    setUser(usuario);
    setUserUpdate(usuario);
  }, [usuario]);

  const handleChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  return user ? (
    <>
      <tr className="text-center">
        <th scope="row">{user.id}</th>

        <td>{user.username}</td>
        <td>{user.rol}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>Editar</Tooltip>}
          >
            <div className="btn mx-2" onClick={toggleShowUpdt}>
              ✏️
            </div>
          </OverlayTrigger>
          {user.rol === "admin" ? (
            <></>
          ) : (
            <>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Enviar Notificacion</Tooltip>}
              >
                <div className="btn " onClick={toggleShowMsg}>
                  ✉
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Eliminar Usuario</Tooltip>}
              >
                <div className="btn " onClick={() => handleRemove(user.id)}>
                  ❌
                </div>
              </OverlayTrigger>
            </>
          )}
        </td>
      </tr>

      <Modal show={showMsg} onHide={toggleShowMsg} centered>
        <Modal.Header>
          <Modal.Title>Nuevo mensaje para {user.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            placeholder="Nuevo Mensaje..."
            rows={7}
            type="textarea"
            className="form-control"
            name="descripcion"
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={toggleShowMsg}>
            Enviar
          </button>
          <button className="btn btn-danger" onClick={toggleShowMsg}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showUpdt}
        onHide={() => {
          toggleShowUpdt();
          setUserUpdate(user);
        }}
        centered
      >
        <Modal.Header>
          <Modal.Title>Editar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={userUpdate.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userUpdate.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="text"
                className="form-control"
                name="password"
                autoComplete="off"
                value={userUpdate.password}
                onChange={handleChange}
              />
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success"
            onClick={() => {
              toggleShowUpdt();
              handleUpdate(userUpdate);
            }}
          >
            Aceptar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              toggleShowUpdt();
              setUserUpdate(user);
            }}
          >
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <></>
  );
};

export default UserRow;
