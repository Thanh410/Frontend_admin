import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../datatableSource";
import { useState } from "react";

function Datatable() {
  const [data, setData] = useState(userRows);

  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColoumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/users/test"}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleClick(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={"/users/new"} className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColoumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
