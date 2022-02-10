import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    if (!username || !password || !email) {
      setMessage("Falta completar algun campo");
      return;
    }
    setLoading(true);
    AuthService.register(username, email, password)
      .then((res) => {
        return navigate("/usuarios");
      })
      .catch((err) => {
        setLoading(false);
        const resMessage =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        setMessage(resMessage);
      });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUser}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={password}
              autoComplete="off"
              onChange={onChangePassword}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                <span>Registrar</span>
              )}
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
