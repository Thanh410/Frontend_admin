import { useContext } from "react";
import "./Navbar.scss";
import {
  ChatBubbleOutline,
  DarkModeOutlined,
  FullscreenExitOutlined,
  Language,
  LanguageOutlined,
  ListAltOutlined,
  ListOutlined,
  NotificationsNone,
  Search,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="text" type="text" placeholder="Search..."></input>
          <Link to={"/search"}>
            <Search />
          </Link>
        </div>
        <div className="listItems">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            {darkMode ? (
              <WbSunnyOutlined
                className="icon"
                onClick={() => dispatch({ type: "LIGHT" })}
              />
            ) : (
              <DarkModeOutlined
                className="icon"
                onClick={() => dispatch({ type: "DARK" })}
              />
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              className="avatar"
              src="https://th.bing.com/th/id/OIP.PwEh4SGekpMaWT2d5GWw0wHaHt?pid=ImgDet&rs=1"
              alt="User"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
