import { useEffect, useState } from "react";
import MensajesList from "./MensajesList";

const Home = ({ currentUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className="container">
      <div className="jumbotron pt-3 ">
        <div className="d-flex  justify-content-between  align-items-center">
          <h1 className="my-3">Nuevas Notificaciones</h1>
        </div>
        <MensajesList user={user} />
      </div>
    </div>
  );
};
export default Home;
