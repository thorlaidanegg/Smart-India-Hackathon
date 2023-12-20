import "./datatable3.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns3, userRows3 } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


const Datatable3 = () => {

    const [data, setData] = useState(userRows3);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
              <Link to="/equipment/test" style={{textDecoration:"none"}}>
                  <div className="viewButton">View</div>
              </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
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
        <Link to="/equipment/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns3.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        className="datagrid"
      />
    </div>
  );
};

export default Datatable3;