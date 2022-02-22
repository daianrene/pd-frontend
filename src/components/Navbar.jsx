import React from "react";
import { Link } from "react-router-dom";

import AuthService from "../services/auth";

const Navbar = ({ currentUser }) => {
  const getNav = () => {
    if (!currentUser)
      return (
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Ingresar <i className="material-icons">login</i>
          </Link>
        </li>
      );
    return (
      <>
        {currentUser.rol === "admin" ? (
          <>
            <li className="nav-item">
              <Link to={"/usuarios"} className="nav-link">
                Usuarios <i className="material-icons ">people</i>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to={"/reportes"} className="nav-link">
                Reportes <i className="material-icons-outlined">description</i>
              </Link>
            </li>
          </>
        )}
        <li className="nav-item">
          <a href="/login" className="nav-link" onClick={AuthService.logout}>
            Cerrar sesion <i className="material-icons ">logout</i>
          </a>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark py-3 mb-3">
      <Link to={"/"} className="navbar-brand">
        <div className="h2">Sistema Parte Diario</div>
      </Link>

      <div className="navbar-nav ml-auto">{getNav()}</div>
    </nav>
  );
};

export default Navbar;
