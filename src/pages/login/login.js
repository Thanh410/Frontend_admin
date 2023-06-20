import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useContext, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  console.log(error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h2 className="title">Login</h2>
        <div className="item">
          <label className="text">Username</label>
          <input
            id="username"
            onChange={handleChange}
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="item">
          <label className="text">Password</label>
          <input
            id="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <button disabled={loading} className="btnLogin" onClick={handleClick}>
          Login
          <i class="button__icon fas fa-chevron-right"></i>
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}

export default Login;
