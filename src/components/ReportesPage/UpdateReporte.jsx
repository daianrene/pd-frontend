import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const UpdateReporte = ({ handleUpdt, data, usuario }) => {
  const [showModal, setShowModal] = useState(false);
  const [reporte, setReporte] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    setReporte(data);
    setUser(usuario);
  }, []);

  const toggleShowModal = () => {
    setShowModal(!showModal);
    setReporte(data);
  };

  const handleChange = (e) => {
    setReporte({ ...reporte, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleUpdt(reporte);
    setShowModal(!showModal);
  };

  return (
    <>
      {user && data && (
        <>
          <button onClick={toggleShowModal} className="btn btn-success my-4 ">
            <i className="material-icons-outlined">edit</i>
          </button>

          <Modal size="xl" show={showModal} onHide={toggleShowModal} centered>
            <Modal.Header className="justify-content-center">
              <Modal.Title>Parte Diario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="turno">Turno</label>
                <select
                  className="custom-select"
                  name="turno"
                  value={reporte.turno}
                  onChange={handleChange}
                  disabled={user.rol === "admin" ? false : true}
                >
                  <option value="T1">T1</option>
                  <option value="T2">T2</option>
                  <option value="T3">T3</option>
                  <option value="T4">T4</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={reporte.fecha}
                  onChange={handleChange}
                  disabled={user.rol === "admin" ? false : true}
                />
              </div>

              <div className="form-group">
                <label htmlFor="user">Conserje</label>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  value={user.username}
                  onChange={handleChange}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="novedades">Novedades</label>
                <textarea
                  rows={7}
                  type="textarea"
                  className="form-control"
                  name="detalle"
                  value={reporte.detalle}
                  onChange={handleChange}
                />
              </div>
            </Modal.Body>

            <Modal.Footer>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  <span>Agregar</span>
                </button>
              </div>

              <button className="btn btn-danger" onClick={toggleShowModal}>
                Cancelar
              </button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};
export default UpdateReporte;
