import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function EmployeeTable({users, sort}) {
    
  console.log("users: ", users);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Picture</StyledTableCell>
            <Tooltip title="Filter by First Name" arrow>
              <StyledTableCell align="right" onClick={()=> sort("firstname")}>First Name</StyledTableCell>
              </Tooltip>
            <Tooltip title="Filter by Last Name" arrow>
            <StyledTableCell onClick={()=> sort("lastname")} align="right">Last Name</StyledTableCell>
            </Tooltip>
            <Tooltip title="Filter by Email" arrow>
            <StyledTableCell align="right" onClick={()=> sort("email")}>Email</StyledTableCell>
            </Tooltip>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.login.uuid}>
              <StyledTableCell component="th" scope="row">
                <img src={row.picture.thumbnail} alt="Employee pictures"/>
              </StyledTableCell>
              <StyledTableCell align="right">{row.name.first}</StyledTableCell>
              <StyledTableCell align="right">{row.name.last}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
