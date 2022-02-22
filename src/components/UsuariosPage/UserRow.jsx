import { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import MsgUser from "./MsgUser";
import EditUser from "./EditUser";

const UserRow = ({ usuario, handleRemove, handleUpdate, handleMessage }) => {
  const [user, setUser] = useState({});

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  useEffect(() => {
    setUser(usuario);
  }, [usuario]);

  return user ? (
    <tr className="text-center">
      <th scope="row">{user.id}</th>

      <td>{user.username}</td>
      <td>{user.rol}</td>
      <td>{user.email}</td>
      <td>**********</td>
      <td>
        <EditUser user={user} handleUpdate={handleUpdate} />
        {user.rol !== "admin" ? (
          <>
            <MsgUser user={user} handleMessage={handleMessage} />

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Eliminar Usuario</Tooltip>}
            >
              <div className="btn material-icons-outlined" onClick={toggleShow}>
                delete
              </div>
            </OverlayTrigger>

            <Modal show={show} onHide={toggleShow} centered>
              <Modal.Header className="justify-content-center">
                <Modal.Title>
                  ¿Seguro que desea eliminar al usuario
                  <span style={{ color: "rgb(255,0,0)" }}>
                    {" "}
                    {user.username}
                  </span>
                  ?
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleRemove(user.id);
                    toggleShow();
                  }}
                >
                  Eliminar
                </button>

                <button className="btn btn-secondary" onClick={toggleShow}>
                  Cancelar
                </button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          <></>
        )}
      </td>
    </tr>
  ) : (
    <></>
  );
};

export default UserRow;
