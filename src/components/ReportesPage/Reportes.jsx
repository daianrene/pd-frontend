import { useEffect, useState } from "react";
import NewReporte from "./NewReporte";
import Reporte from "./Reporte";
import Users from "../../services/users";

const Reportes = ({ currentUser }) => {
  const [reportes, setReportes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (currentUser?.id) {
      if (currentUser.rol === "admin") {
        Users.getUsers()
          .then((res) => setUsuarios(res.data))
          .catch(console.log);
        Users.getAllReportes().then((res) => {
          setReportes(res.data);
        });
      } else {
        Users.getReportes(currentUser.id)
          .then((res) => {
            setReportes(res.data);
          })
          .catch(console.log);
      }
    }
  }, []);

  const handleAddReporte = (reporte) => {
    Users.addReporte(reporte)
      .then(() => {
        if (currentUser.rol === "admin") {
          Users.getAllReportes().then((res) => {
            setReportes(res.data);
          });
        } else {
          Users.getReportes(currentUser.id)
            .then((res) => {
              setReportes(res.data);
            })
            .catch(console.log);
        }
      })
      .catch(console.log);
  };

  return (
    <div className="container ">
      <div className="jumbotron pt-3">
        <div className="d-flex  justify-content-between  align-items-center">
          <h1>Mis reportes</h1>
          <NewReporte handleAddReporte={handleAddReporte} usuarios={usuarios} />
        </div>
        <ul className="list-group">
          {reportes.map((reporte, index) => (
            <Reporte key={index} data={reporte} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reportes;
