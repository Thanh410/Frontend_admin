import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { userRows } from "../../datatableSource";

function Datatable({ columns, title }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data } = useFetch(`/api/${path}`);

  const { t } = useTranslation(["title", "option"]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleClick = async (id) => {
    try {
      await axios.delete(
        `https://backend-api-admin.onrender.com/api/${path}/find/${id}`
      );
      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/users"}>
              <div className="viewButton">{t("view", { ns: "option" })}</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleClick(params.row._id)}
            >
              {t("delete", { ns: "option" })}
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {t(title)}
        <Link to={`/${path}/new`} className="link">
          {t("addnew")}
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}

export default Datatable;
