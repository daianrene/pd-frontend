import { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const EditUser = ({ user, handleUpdate }) => {
  const [userUpdate, setUserUpdate] = useState({});

  const [showPass, setShowPass] = useState(false);

  const [showUpdt, setShowUpdt] = useState(false);
  const toggleShowUpdt = () => setShowUpdt(!showUpdt);

  useEffect(() => {
    setUserUpdate(user);
  }, [user]);

  const handleChange = (e) => {
    setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
  };

  return (
    <>
      <OverlayTrigger placement="bottom" overlay={<Tooltip>Editar</Tooltip>}>
        <div className="material-icons-outlined btn" onClick={toggleShowUpdt}>
          edit
        </div>
      </OverlayTrigger>

      <Modal
        show={showUpdt}
        onHide={() => {
          toggleShowUpdt();
          setShowPass(false);
          setUserUpdate(user);
        }}
        centered
      >
        <Modal.Header className="justify-content-center">
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
                disabled
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
              <div
                className="btn material-icons-outlined"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? "visibility" : "visibility_off"}
              </div>
              <input
                type={showPass ? "text" : "password"}
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
              setShowPass(false);
              handleUpdate(userUpdate);
            }}
          >
            Actualizar
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              toggleShowUpdt();
              setUserUpdate(user);
              setShowPass(false);
            }}
          >
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditUser;
