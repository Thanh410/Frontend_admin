import "./Sidebar.scss";
import { Link } from "react-router-dom";
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

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

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
            <span>Dashboard</span>
          </li>
          <p className="title">USER</p>

          <li>
            <Link to={"/users"}>
              <PeopleOutline className="icon" />
              <span>User</span>
            </Link>
          </li>
          <p className="title">USEFULL</p>

          <li>
            <Link to={"/products"}>
              <Store className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
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
