import Datatable from "../../component/datatable/Datatable";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./List.scss";

function List({ columns, title }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable title={title} columns={columns} />
      </div>
    </div>
  );
}

export default List;
