import { AuthContext } from "../../context/authContext";
import "./ChangePassword.scss";
import { useContext, useState } from "react";
import axios from "axios";

import { ArrowBackIosNewOutlined } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import Toast from "../../component/toast/toast";

function ChangePassword() {
  const { loading } = useContext(AuthContext);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const changePassword = () => {
    setTimeout(() => {
      navigate("/login");
      setToast(true);
    }, 2000);
  };

  return (
    <div className="changePassword">
      <div className="back">
        <Link to={"/login"} className="link">
          <ArrowBackIosNewOutlined />
          Back
        </Link>
      </div>
      <div className="changePasswordContainer">
        {toast && <Toast>Password successfully set</Toast>}
        <div className="header">
          <h2 className="title">Change Password</h2>
          <p>We have send a code to you email</p>
        </div>
        <div className="body">
          <label className="text">New Password</label>
          <input
            type="password"
            className="item"
            placeholder="Password"
          ></input>
          <label className="text">Confirm Password</label>

          <input
            type="password"
            className="item"
            placeholder="Confirm Password"
          ></input>
        </div>
        <button className="btnSend" disabled={loading} onClick={changePassword}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
