import { useState, useEffect } from "react";
import AuthService from "./services/auth";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Usuarios from "./components/Usuarios";
import Reportes from "./components/Reportes";
import { useNavigate } from "react-router-dom";
import NewReporte from "./components/NewReporte";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  let navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      return navigate("/");
    } else {
      return navigate("/login");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/usuarios" element={<Usuarios />} />
        <Route exact path="/reportes" element={<Reportes />} />
        <Route exact path="/reportes/nuevo" element={<NewReporte />} />
        <Route exact path="/user/nuevo" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
