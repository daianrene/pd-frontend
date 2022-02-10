import { useEffect, useState } from "react";
import AuthService from "../services/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es requerido
      </div>
    );
  }
};

const NewReporte = () => {
  const [username, setUsername] = useState("");
  const [turno, setTurno] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    let user = AuthService.getCurrentUser();
    setUsername(user.username);
    let fecha = new Date().toISOString().split("T")[0];
    setFecha(fecha);
    setDescripcion("Sin novedades");
  }, []);

  const onChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const onChangeTurno = (e) => {
    setTurno(e.target.value);
  };

  const onChangeFecha = (e) => {
    setFecha(e.target.value);
  };

  const onChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="col-md-12">
      <div className="container">
        <div className="card ">
          <h2>Parte Diario</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="turno">Turno</label>
              <input
                type="text"
                className="form-control"
                name="turno"
                value={turno}
                onChange={onChangeTurno}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fecha">Fecha</label>
              <input
                type="date"
                className="form-control"
                name="fecha"
                value={fecha}
                onChange={onChangeFecha}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user">Conserje</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUser}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="novedades">Novedades</label>
              <textarea
                rows={7}
                type="textarea"
                className="form-control"
                name="descripcion"
                value={descripcion}
                onChange={onChangeDescripcion}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                <span>Agregar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewReporte;
