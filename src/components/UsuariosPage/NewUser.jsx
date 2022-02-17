import { useState } from "react";
import AuthService from "../../services/auth";
import { Modal } from "react-bootstrap";

const initialUser = {
  username: "",
  password: "",
  email: "",
};

const NewUser = ({ handleNew }) => {
  const [user, setUser] = useState(initialUser);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    if (!user.username || !user.password || !user.email) {
      setMessage("Falta completar algun campo");
      return;
    }
    setLoading(true);
    AuthService.register(user.username, user.email, user.password)
      .then((res) => {
        setLoading(false);
        toggleShowModal();
        handleNew();
      })
      .catch((err) => {
        setLoading(false);
        const resMessage =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        setMessage(resMessage);
      });
  };

  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
    setUser(initialUser);
    setMessage("");
  };

  return (
    <>
      <button onClick={toggleShowModal} className="btn btn-success my-4">
        Nuevo Usuario
      </button>

      <Modal show={showModal} onHide={toggleShowModal} centered>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Registrar nuevo usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={user.password}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={handleRegister}
            disabled={loading}
            className="btn btn-success"
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              <span>Registrar</span>
            )}
          </button>
          <button className="btn btn-danger" onClick={toggleShowModal}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NewUser;
