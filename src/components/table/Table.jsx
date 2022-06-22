import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const list = () => {
    const rows = [{
        id: 12345678,
        product: "Heels",
        img: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
},
{
    id: 87654321,
    product: "Skirt",
    img: "https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    customer: "Michael Doe",
    date: "1 March",
    amount: 985,
    method: "Online Payment",
    status: "Pending",
},
{
    id: 87651234,
    product: "Earings",
    img: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    customer: "John Doe",
    date: "1 March",
    amount: 195,
    method: "Online",
    status: "Approved",
},
{
    id: 87651234,
    product: "rings",
    img: "https://images.pexels.com/photos/445986/pexels-photo-445986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    customer: "John Michael",
    date: "1 March",
    amount: 195,
    method: "Online",
    status: "Approved",
},
{
    id: 87651234,
    product: "Pendant",
    img: "https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    customer: "Michael Smith",
    date: "1 March",
    amount: 145,
    method: "Online",
    status: "Approved",
}


]
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
            <TableRow
              key={row.id} >
              <TableCell className="tableCell">
                {row.id}
              </TableCell>
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
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default list