import { useEffect, useState } from "react";
import getTurno from "../../services/getTurno";
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
    <li key={index} className="list-group-item my-3">
      <div className="d-flex justify-content-between  align-items-center">
        <div>
          <div className="font-italic">
            {user.rol === "admin" && (
              <>
                <small>Id Usuario: {data.userId}</small> <br />
              </>
            )}

            <small>Fecha: {data.fecha}</small>
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

        {((data.fecha === fechaHoy && data.turno === turno) ||
          user.rol === "admin") && (
          <UpdateReporte data={data} usuario={user} handleUpdt={handleUpdt} />
        )}
      </div>
    </li>
  );
};
export default Reporte;
