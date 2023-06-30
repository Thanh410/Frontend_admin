import "./Featured.scss";
import { KeyboardArrowDown, MoreVertOutlined } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTranslation } from "react-i18next";
function Featured() {
  const { t } = useTranslation("featured");

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">{t("totalRevenue")}</h1>
        <MoreVertOutlined className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">{t("totalSale")}</p>
        <p className="amount">$40</p>
        <p className="desc">{t("about")}</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">{t("target")}</div>
            <div className="itemResult positive">
              <KeyboardArrowDown />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">{t("lastWeek")}</div>
            <div className="itemResult negative">
              <KeyboardArrowDown />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">{t("lastMonth")}</div>
            <div className="itemResult  negative">
              <KeyboardArrowDown />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
