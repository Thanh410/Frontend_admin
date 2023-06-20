import { useContext, useState } from "react";
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
import { AuthContext } from "../../context/authContext";
import { locales } from "../../i18n/i18";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
function Navbar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const [active, setActive] = useState(false);
  const { user } = useContext(AuthContext);
  const { i18n, t } = useTranslation();

  const currentLanguage = locales[i18n.language];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActive(true);
  };
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
            <span
              className={
                currentLanguage === "English"
                  ? "languageEn active"
                  : "languageEn"
              }
              onClick={() => changeLanguage("en")}
            >
              English
            </span>
            <span className="gutter">|</span>
            <span
              className={
                currentLanguage === "Tiếng Việt"
                  ? "languageVi active"
                  : "languageVi"
              }
              onClick={() => changeLanguage("vi")}
            >
              Tiếng Việt
            </span>
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
            {user && (
              <img
                className="avatar"
                src={
                  user
                    ? user.photos[0]
                    : "https://th.bing.com/th/id/OIP.PwEh4SGekpMaWT2d5GWw0wHaHt?pid=ImgDet&rs=1"
                }
                alt="User"
              ></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
