import { useState, useEffect } from "react";
import AuthService from "./services/auth";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Usuarios from "./components/UsuariosPage/Usuarios";
import Reportes from "./components/Reportes";
import { useNavigate } from "react-router-dom";
import NewReporte from "./components/NewReporte";

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

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home currentUser={currentUser} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/usuarios" element={<Usuarios />} />
        <Route exact path="/reportes" element={<Reportes />} />
        <Route exact path="/reportes/nuevo" element={<NewReporte />} />
      </Routes>
    </>
  );
};

export default App;
