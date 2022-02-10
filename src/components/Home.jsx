import { useState } from "react";
const Home = () => {
  const [content, setContent] = useState("Probando ando");

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
export default Home;
