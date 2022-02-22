import { useEffect, useState } from "react";
import Users from "../../services/users";
import Mensaje from "./Mensaje";

const MensajesList = ({ userId }) => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    if (userId) {
      Users.getMessages(userId)
        .then((res) => setMensajes(res.data))
        .catch(console.log);
    }
  }, [userId]);

  return (
    <>
      <div className="h1 mb-5">Nuevos mensajes</div>
      <ul className="list-group border">
        {mensajes.map((mensaje, index) => (
          <Mensaje key={index} data={mensaje} />
        ))}
      </ul>
    </>
  );
};
export default MensajesList;
