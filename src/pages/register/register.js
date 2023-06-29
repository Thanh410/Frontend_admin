import { AuthContext } from "../../context/authContext";
import "./register.scss";
import { useContext, useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import Toast from "../../component/toast/toast";
function Register() {
  const [credentials, setCredentials] = useState({
    username: null,
    password: undefined,
    email: undefined,
  });
  const [toast, setToast] = useState("");
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post(
        "https://backend-api-admin.onrender.com/api/auth/register",
        credentials
      );
      setToast(res.data);
      if (res.data.isAdmin) {
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
        setToast(res.data);
        navigate("/login");
      } else {
        dispatch({
          type: "REGISTER_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response.data,
      });
    }
  };
  return (
    <div className="SignUp">
      {error ? <Toast>Not found!</Toast> : user && <Toast>{toast}</Toast>}
      <div className="SignUpContainer">
        <h2 className="title">Sign Up</h2>
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
          <label className="text">Email</label>
          <input
            id="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
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

        <button disabled={loading} className="btnSignUp" onClick={handleClick}>
          Register
          <ChevronRight className="icon" />
        </button>
        <span className="signUp">
          You already have an account?
          <Link to={"/login"} className="linkSignUp">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
