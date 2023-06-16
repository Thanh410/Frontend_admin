export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWidthImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWidthStatus ${params.row.status} `}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "active",
    email: "Snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "passed",
    email: "Snow@gmail.com",
    age: 23,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "active",
    email: "Snow@gmail.com",
    age: 30,
  },
  {
    id: 4,
    username: "Snow",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "pending",
    email: "Snow@gmail.com",
    age: 31,
  },
];
