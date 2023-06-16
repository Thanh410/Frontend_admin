import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import {} from "@mui/icons-material";

function List() {
  const rows = [
    {
      id: 1,
      product: "PS5 console",
      img: "https://th.bing.com/th/id/OIP.c-Ai6aQRWt49EVQFbMoevwHaHE?pid=ImgDet&rs=1",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Acer nitro 5",
      img: "https://th.bing.com/th/id/OIP.reWAmwL5TxvDxB6kf3qnMgHaFj?pid=ImgDet&rs=1",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 3,
      product: "Lenovo",
      img: "https://geekspin.co/wp-content/uploads/2021/03/win-lenovo-yoga-9i-laptop.jpeg",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 4,
      product: "Asus  ",
      img: "https://th.bing.com/th/id/OIP.NQfLMOah4maaEPYZjYePwwHaHa?pid=ImgDet&rs=1",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 5,
      product: "Macbook m1",
      img: "https://th.bing.com/th/id/R.794d90c5c24a8bb9ad9c637288d134ce?rik=4F4vl%2fk7eD2DQw&riu=http%3a%2f%2fwww.tech21century.com%2fwp-content%2fuploads%2f2015%2f03%2fmacbookpro.jpg&ehk=%2bfxMio%2f%2fVIUxJapq3Va%2bHFT7hHn2Z5%2bkayswWCcGjhc%3d&risl=&pid=ImgRaw&r=0",
      customer: " John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <div className={`status ${row.status}`}>{row.status}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
