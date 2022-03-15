import { useEffect, useState } from "react";
import getTurno from "../../utils/getTurno";
import reformatDate from "../../Utils/reformatDate";
import UpdateReporte from "./UpdateReporte";

const Reporte = ({ index, data, user, handleUpdt }) => {
  const [turno, setTurno] = useState(null);
  const [fechaHoy, setFechaHoy] = useState(null);

  useEffect(() => {
    const t = getTurno();
    setTurno(t);
    const hoy = new Date();
    setFechaHoy(hoy.toISOString().split("T")[0]);
  }, []);

  return (
    <li key={index} className="list-group-item my-3  ">
      <div className="d-flex justify-content-between  align-items-center ">
        <div>
          <div className="font-italic">
            <small>Conserje: {data.user.username}</small> <br />
            <small>Fecha: {reformatDate(data.fecha)}</small>
            <br />
            <small>Turno: {data.turno}</small>
          </div>
          <div className="d-flex align-items-center my-3">
            <p
              className="text-break text-justify mr-5 text-uppercase"
              style={{ whiteSpace: "pre" }}
            >
              {data.detalle}
            </p>
          </div>
        </div>

        {((data.fecha.split(" ")[0] === fechaHoy &&
          data.turno === turno &&
          data.userId === user.id) ||
          user.rol === "admin") && (
          <UpdateReporte data={data} usuario={user} handleUpdt={handleUpdt} />
        )}
      </div>
    </li>
  );
};
export default Reporte;
