import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useContext, useState } from "react";
import axios from "axios";

import { ChevronRight } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import Toast from "../../component/toast/toast";
import { RecoveryContext } from "../../context/recoveryContext";
import Loading from "../../component/loading/Loading";
function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const { email } = useContext(RecoveryContext);
  const [toast, setToast] = useState(false);

  const navigate = useNavigate();

  const handleOTP = async (e) => {
    e.preventDefault();

    try {
      if (user.email) {
        const otp = Math.floor(Math.random() * 9000 + 1000);

        const res = await axios.post(
          "https://backend-api-admin.onrender.com/api/send_recovery_email",
          { otp, email: user.email }
        );
        console.log(res.data);
      }
      // navigate("/otp");
    } catch (err) {}
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://backend-api-admin.onrender.com/api/auth/login",
        credentials
      );

      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
      setToast(true);
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response.data,
      });
    }
  };
  console.log(user);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login">
          {toast && <Toast>Login Success</Toast>}
          {error && <Toast>Wrong Username or Password</Toast>}

          <div className="loginContainer">
            <h2 className="title">Login</h2>
            <div className="item">
              <label className="text">Email</label>
              <input
                id="username"
                onChange={handleChange}
                type="text"
                placeholder="Enter Your Email"
              ></input>
            </div>
            <div className="item">
              <label className="text">Password</label>
              <input
                id="password"
                onChange={handleChange}
                type="password"
                placeholder="Enter is Password"
              ></input>

              <Link to={"/otp"} className="forgotPassword" onClick={handleOTP}>
                Forgot password?
              </Link>
            </div>

            <button
              disabled={loading}
              className="btnLogin"
              onClick={handleClick}
              onKeyDown={(e) => e.key === "Enter"}
            >
              Login
              <ChevronRight className="icon" />
            </button>
            <span className="signUp">
              Don't have an account?
              <Link to={"/register"} className="linkSignUp">
                Register
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
