export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWidthImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "country", headerName: "Country", width: 100 },
  { field: "city", headerName: "city", width: 100 },
  { field: "phone", headerName: "Phone", width: 100 },
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
    phone: "+32 394 2387 282",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "passed",
    email: "Snow@gmail.com",
    age: 23,
    phone: "+32 394 2287 282",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "active",
    email: "Snow@gmail.com",
    age: 30,
    phone: "+32 394 2277 122",
  },
  {
    id: 4,
    username: "Snow",
    img: "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    status: "pending",
    email: "Snow@gmail.com",
    age: 31,
    phone: "+32 394 3377 122",
  },
];

export const useHotel = [
  { field: "_id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "type", headerName: "Type", width: 100 },
  { field: "cheapestPrice", headerName: "Cheapest Price", width: 100 },
  { field: "desc", headerName: "Desc", width: 250 },
  { field: "city", headerName: "City", width: 100 },
];

export const useRoom = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "type", headerName: "Type", width: 100 },
  { field: "title", headerName: "Title", width: 100 },
  { field: "desc", headerName: "Desc", width: 100 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "maxPeople", headerName: "MaxPeople", width: 100 },
];
