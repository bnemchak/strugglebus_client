import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from '../LandingPage/Title';

// Generate Order Data
function createData(id, name) {
  return {
    id, name,
  };
}

const rows = [
  createData(0, 'Monday'),
  createData(1, 'Tuesday'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Medicines</Title>
      <Table size="small">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <Link href="/{row.name}" onClick={preventDefault}>
              <TableCell>{row.name}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Title>Tasks</Title>
      <Table size="small">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <Link href="/{row.name}" onClick={preventDefault}>
              <TableCell>{row.name}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/notes" onClick={preventDefault}>
          Hold That Thought
        </Link>
      </div>
    </React.Fragment>
  );
}
