import { AuthContext } from "../../context/authContext";
import "./otp.scss";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { ArrowBackIosNewOutlined } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import { RecoveryContext } from "../../context/recoveryContext";

function OTP() {
  const { user, loading } = useContext(AuthContext);
  const { email, otp } = useContext(RecoveryContext);
  const [timerCount, setTimerCount] = useState(30);
  const [disable, setDisable] = useState(true);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const navigate = useNavigate();

  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backend-api-admin.onrender.com/api/send_recovery_email",
        { otp, email }
      );
      console.log(res.data);
      setTimerCount(15);
    } catch (err) {}
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerCount((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  const handleVerfiyOTP = () => {
    if (parseInt(OTPinput.join("")) === otp) {
      navigate("/changePassword");
      return;
    }
    alert(
      "The code you have entered is not correct, try again or re-send the link"
    );
    return;
  };

  return (
    <div className="otp">
      <div className="back">
        <Link to={"/login"} className="link">
          <ArrowBackIosNewOutlined />
          Back
        </Link>
      </div>
      <div className="otpContainer">
        <div className="header">
          <h2 className="title">Email Verification</h2>
          <p>We have send a code to you email {user}</p>
        </div>
        <div className="body">
          <input
            type="text"
            onChange={(e) =>
              setOTPinput([
                e.target.value,
                OTPinput[1],
                OTPinput[2],
                OTPinput[3],
              ])
            }
            className="item"
          ></input>
          <input
            type="text"
            onChange={(e) =>
              setOTPinput([
                OTPinput[0],
                e.target.value,
                OTPinput[2],
                OTPinput[3],
              ])
            }
            className="item"
          ></input>
          <input
            type="text"
            onChange={(e) =>
              setOTPinput([
                OTPinput[0],
                OTPinput[1],
                e.target.value,
                OTPinput[3],
              ])
            }
            className="item"
          ></input>
          <input
            type="text"
            onChange={(e) =>
              setOTPinput([
                OTPinput[0],
                OTPinput[1],
                OTPinput[2],
                e.target.value,
              ])
            }
            className="item"
          ></input>
        </div>
        <button
          className="btnSend"
          disabled={loading}
          onClick={handleVerfiyOTP}
        >
          Send
        </button>

        <div className="desc">
          <p>Didn't recieve code?</p>
          <Link to={""} onClick={handleOTP} className="link">
            {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OTP;
