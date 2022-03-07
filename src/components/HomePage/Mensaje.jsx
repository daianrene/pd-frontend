import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Mensaje = ({ index, data }) => {
  return (
    <li key={index} className="list-group-item my-3">
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-break text-justify mr-5 text-uppercase">
          {data.message}
        </p>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Marcar como leido</Tooltip>}
        >
          <span
            className="material-icons-outlined btn"
            style={{ color: "rgb(0,155,0)" }}
          >
            task_alt
          </span>
        </OverlayTrigger>
      </div>
      <div className="font-italic">
        <small>{data.createdAt}</small>
        <br />
        <small>{data.read ? "Leido" : "No leido"}</small>
      </div>
    </li>
  );
};
export default Mensaje;
