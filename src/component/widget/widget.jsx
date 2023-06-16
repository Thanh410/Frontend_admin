import {
  AccountBalanceOutlined,
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widget.scss";
import { Link } from "react-router-dom";

function Widget({ type }) {
  let data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
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
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
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
        title: "EARNING",
        isMoney: false,
        link: "See all earnings",
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
        title: "BALANCE",
        isMoney: false,
        link: "See detailbalances",
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
