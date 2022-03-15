import { useEffect, useState } from "react";
import Users from "../../services/users";
import Mensaje from "./Mensaje";

const MensajesList = ({ user, viewAll }) => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    if (user?.id) {
      user.rol !== "admin"
        ? Users.getMessages(user.id)
            .then((res) => setMensajes(res.data))
            .catch(console.log)
        : Users.getAllMessages(user.id)
            .then((res) => setMensajes(res.data))
            .catch(console.log);
    }
  }, [user]);

  const handleRead = async (idMessage) => {
    try {
      await Users.readMessage(idMessage);
      const newList = await Users.getMessages(user.id);
      setMensajes(newList.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ul className="list-group">
        {mensajes.map(
          (mensaje) =>
            (!mensaje.read || viewAll) && (
              <Mensaje
                key={mensaje.id}
                data={mensaje}
                rol={user.rol}
                handleRead={handleRead}
              />
            )
        )}
      </ul>
    </>
  );
};
export default MensajesList;
