import { useEffect, useState } from "react";
import NewReporte from "./NewReporte";
import Reporte from "./Reporte";
import Users from "../../services/users";
import PdfView from "./PdfView";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const filtroDefault = {
  filtroFecha: "",
  filtroTurno: "-1",
  filtroConserje: "-1",
};

const Reportes = ({ currentUser }) => {
  const [reportes, setReportes] = useState([]);
  const [conserjes, setConserjes] = useState([]);

  const [filtros, setFiltros] = useState(filtroDefault);

  useEffect(() => {
    if (currentUser?.id) {
      Users.getConserjes()
        .then((res) => setConserjes(res.data))
        .catch(console.log);
      Users.getReportes(currentUser.id)
        .then((res) => {
          setReportes(res.data);
        })
        .catch(console.log);
    }
  }, []);

  const handleChangeFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleAddReporte = (reporte) => {
    Users.addReporte(reporte)
      .then(() => {
        Users.getReportes(currentUser.id)
          .then((res) => {
            setReportes(res.data);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };

  const filtrarReportes = () => {
    return reportes
      .filter(
        (reporte) =>
          filtros.filtroConserje === "-1" ||
          filtros.filtroConserje == reporte.userId
      )
      .filter(
        (reporte) =>
          filtros.filtroTurno === "-1" || filtros.filtroTurno == reporte.turno
      )
      .filter(
        (reporte) =>
          !filtros.filtroFecha || filtros.filtroFecha == reporte.fecha
      );
  };

  return (
    <>
      {/* <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <PdfView reportes={filtrarReportes(reportes)}></PdfView>
      </PDFViewer> */}
      <div className="container ">
        <div className="jumbotron pt-3">
          <div className="d-flex  justify-content-between  align-items-center">
            <h1>Reportes</h1>
            <NewReporte
              handleAddReporte={handleAddReporte}
              usuarios={conserjes}
            />
          </div>
          <div className="d-flex  justify-content-between  align-items-center">
            <div className="form-inline">
              <div className="form-group flex-column mr-3 align-items-start">
                <label htmlFor="filtroFecha">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  name="filtroFecha"
                  onChange={handleChangeFiltro}
                  value={filtros.filtroFecha}
                />
              </div>

              <div className="form-group flex-column mr-3 align-items-start">
                <label htmlFor="turno">Turno</label>
                <select
                  className="custom-select"
                  name="filtroTurno"
                  value={filtros.filtroTurno}
                  onChange={handleChangeFiltro}
                >
                  <option value="-1">Todos</option>
                  <option value="T1">T1</option>
                  <option value="T2">T2</option>
                  <option value="T3">T3</option>
                  <option value="T4">T4</option>
                </select>
              </div>

              <div className="form-group flex-column mr-3 align-items-start">
                <label htmlFor="user">Conserje</label>
                <select
                  className="custom-select"
                  name="filtroConserje"
                  value={filtros.filtroConserje}
                  onChange={handleChangeFiltro}
                >
                  <option value="-1">Todos</option>
                  {conserjes.map((conserje) => (
                    <option key={conserje.id} value={conserje.id}>
                      {conserje.username}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="btn btn-success align-self-end "
                onClick={() => setFiltros(filtroDefault)}
              >
                Limpiar
              </div>
            </div>
            <PDFDownloadLink
              className=" align-self-end"
              document={<PdfView reportes={filtrarReportes(reportes)} />}
              fileName="Reportes.pdf"
            >
              <div className="btn btn-primary">
                <i className="material-icons-outlined">file_download</i>
                <span className="mx-1">Descargar</span>
              </div>
            </PDFDownloadLink>
          </div>

          <ul className="list-group">
            {filtrarReportes(reportes).map((reporte, index) => (
              <Reporte
                key={index}
                data={reporte}
                user={currentUser}
                handleUpdt={handleAddReporte}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reportes;
