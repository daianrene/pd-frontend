import { Link } from "react-router-dom";

const Reportes = () => {
  return (
    <>
      <div className="container ">
        <Link to={"/reportes/nuevo"}>
          <button className="btn btn-success my-2">Nuevo reporte</button>
        </Link>{" "}
        <div className="jumbotron">
          <h1>Mis reportes</h1>
        </div>
      </div>
    </>
  );
};

export default Reportes;
