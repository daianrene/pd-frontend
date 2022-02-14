import React from "react";
import { Link } from "react-router-dom";

import AuthService from "../services/auth";

const Navbar = ({ currentUser }) => {
  const getNav = () => {
    if (!currentUser)
      return (
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Ingresar
          </Link>
        </li>
      );
    return (
      <>
        {currentUser.rol === "admin" ? (
          <>
            <li className="nav-item">
              <Link to={"/usuarios"} className="nav-link">
                Usuarios
              </Link>
            </li>
          </>
        ) : (
          <>
            <Link to={"/reportes"} className="nav-link">
              Reportes
            </Link>
          </>
        )}
        <li className="nav-item">
          <a href="/login" className="nav-link" onClick={AuthService.logout}>
            Cerrar sesion
          </a>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <Link to={"/"} className="navbar-brand">
        <div className="h2">Sistema Parte Diario</div>
      </Link>

      <div className="navbar-nav ml-auto">{getNav()}</div>
    </nav>
  );
};

export default Navbar;
