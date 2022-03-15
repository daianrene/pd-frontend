import { OverlayTrigger, Tooltip } from "react-bootstrap";
import reformatDate from "../../Utils/reformatDate";

const Mensaje = ({ data, handleRead, rol }) => {
  const readMessage = () => {
    handleRead(data.id);
  };

  return (
    <li key={data.id} className="list-group-item my-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-break text-justify">
          {rol === "admin" && (
            <>
              <h6>Usuario: {data.user.username}</h6>
              <br />
            </>
          )}
          <p className=" text-uppercase  mr-5">{data.message}</p>
        </div>
        {!data.read && rol !== "admin" && (
          <>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Marcar como leido</Tooltip>}
            >
              <div
                className="material-icons-outlined btn"
                onClick={readMessage}
                style={{ color: "rgb(0,155,0)" }}
              >
                task_alt
              </div>
            </OverlayTrigger>
          </>
        )}
      </div>
      <div className="font-italic">
        <small>{reformatDate(data.createdAt)}</small>
        <br />
        <small>{data.read ? "Leido" : "No leido"}</small>
      </div>
    </li>
  );
};
export default Mensaje;
