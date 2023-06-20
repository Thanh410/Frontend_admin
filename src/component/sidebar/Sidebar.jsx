import "./Sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  InsertChart,
  LocalShipping,
  Logout,
  NotificationsNone,
  PeopleOutline,
  Psychology,
  Settings,
  SettingsSystemDaydream,
  Store,
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);
  const { i18n, t } = useTranslation("sidebar");

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"}>
          <span className="logo">Logo</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>{t("dashboard")}</span>
          </li>
          <p className="title">USER</p>

          <li>
            <Link to={"/users"}>
              <PeopleOutline className="icon" />
              <span>{t("user")}</span>
            </Link>
          </li>
          <p className="title">USEFULL</p>

          <li>
            <Link to={"/hotels"}>
              <Store className="icon" />
              <span>{t("hotel")}</span>
            </Link>
          </li>
          <li>
            <Link to={"/rooms"}>
              <CreditCard className="icon" />
              <span>{t("room")}</span>
            </Link>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>{t("delivery")}</span>
          </li>
          <li>
            <InsertChart className="icon" />
            <span>{t("stats")}</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <NotificationsNone className="icon" />
            <span>{t("notifications")}</span>
          </li>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>{t("systemHealth")}</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>{t("logs")}</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>{t("settings")}</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlined className="icon" />
            <span>{t("profiles")}</span>
          </li>
          {user && (
            <li onClick={handleClick}>
              <Logout className="icon" />
              <span>{t("logout")}</span>
            </li>
          )}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
