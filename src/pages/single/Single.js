import "./Single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import List from "../../component/table/Table";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="btnEdit">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://th.bing.com/th/id/R.b10213790b1a7e1ea8b00293076e4032?rik=e0RSt9tbBLetEA&pid=ImgRaw&r=0"
                alt=""
                className="itemImg"
              ></img>
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Distict 9, HCM</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+84 238 1283 213 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Viet Nam </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Month)" />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title"> Lats Transactions </h2>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
