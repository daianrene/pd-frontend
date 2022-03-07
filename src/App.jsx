import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AuthService from "./services/auth";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Usuarios from "./components/UsuariosPage/Usuarios";
import Reportes from "./components/ReportesPage/Reportes";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const initial = async () => {
      await AuthService.validateToken();
      const user = AuthService.getCurrentUser();

      if (user) {
        setCurrentUser(user);
        return navigate("/");
      } else {
        return navigate("/login");
      }
    };

    initial();
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home currentUser={currentUser} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/usuarios" element={<Usuarios />} />
        <Route
          exact
          path="/reportes"
          element={<Reportes currentUser={currentUser} />}
        />
      </Routes>
    </>
  );
};

export default App;
