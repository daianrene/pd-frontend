import { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

const MsgUser = ({ user }) => {
  const [username, setUsername] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const toggleShowMsg = () => setShowMsg(!showMsg);

  useEffect(() => {
    setUsername(user);
  }, [user]);

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Enviar Notificacion</Tooltip>}
      >
        <div className="btn material-icons-outlined " onClick={toggleShowMsg}>
          email
        </div>
      </OverlayTrigger>
      <Modal show={showMsg} onHide={toggleShowMsg} centered>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Nuevo mensaje para {username}</Modal.Title>
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
            Enviar Mensaje
          </button>
          <button className="btn btn-danger" onClick={toggleShowMsg}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MsgUser;
