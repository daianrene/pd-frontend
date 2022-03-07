import { useEffect, useState } from "react";
import NewReporte from "./NewReporte";

const Reporte = ({ index, data }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // console.log(data);
  });

  return (
    <li key={index} className="list-group-item my-3">
      <div className="font-italic">
        <small>Id Usuario: {data.userId}</small>
        <br />
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
    </li>
  );
};
export default Reporte;
