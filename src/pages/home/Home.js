import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import List from "../../component/table/Table";
import Widget from "../../component/widget/widget";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Month" />
        </div>
        <div className="listContainer">
          <div className="listTitle"> Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home;
