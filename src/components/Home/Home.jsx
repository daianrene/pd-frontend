import { useEffect, useState } from "react";
import MensajesList from "./MensajesList";

const Home = ({ currentUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className="container">
      <header className="jumbotron">
        {user ? <MensajesList userId={user.id} /> : <></>}
      </header>
    </div>
  );
};
export default Home;
