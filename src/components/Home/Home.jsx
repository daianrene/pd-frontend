import { useEffect, useState } from "react";
import AuthService from "../../services/auth";
import MensajesList from "./MensajesList";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(AuthService.getCurrentUser);
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {user ? <MensajesList userId={user.id} /> : <></>}
      </header>
    </div>
  );
};
export default Home;
