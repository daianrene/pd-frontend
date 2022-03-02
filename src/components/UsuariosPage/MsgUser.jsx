import { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import Users from "../../services/users";

const MsgUser = ({ user, handleMessage }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const toggleShowMsg = () => {
    setShowMsg(!showMsg);
    setMessage("");
  };

  useEffect(() => {
    setUsername(user.username);
  }, [user]);

  const sendMessage = async () => {
    toggleShowMsg();
    try {
      await Users.sendMessage(message, user.id);
    } catch (err) {
      console.log(err);
    }
  };

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={sendMessage}>
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
