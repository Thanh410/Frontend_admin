import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widget.scss";
import { Link } from "react-router-dom";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

function Widget({ type }) {
  let data;
  const amount = 100;
  const diff = 20;
  const { t } = useTranslation("widget");

  switch (type) {
    case "user":
      data = {
        title: <span>{t("user")}</span>,
        isMoney: false,
        link: <span>{t("seeAllUser")}</span>,
        icon: (
          <PersonOutline
            className="icon"
            style={{ backgroundColor: "rgba(255,0,0,0.2", color: "crimson" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: <span>{t("orders")}</span>,
        isMoney: false,
        link: <span>{t("seeAllOrder")}</span>,
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              backgroundColor: "rgba(218,165,32,0.2",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: <span>{t("earning")}</span>,
        isMoney: false,
        link: <span>{t("seeAllbalance")}</span>,
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0,128,0,0.2", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: <span>{t("balance")}</span>,
        isMoney: false,
        link: <span>{t("seeAllEarning")}</span>,
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2", color: "purple" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link">
          <Link to={""}>{data.link}</Link>
        </div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp /> {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
