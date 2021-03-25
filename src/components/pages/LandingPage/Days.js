import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>One Day at a Time</Title>
      <Table size="small">
        <TableBody>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/monday'>Monday</Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/tuesday'>Tuesday</Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/wednesday'>Wednesday</Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/thursday'>Thursday</Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/friday'>Friday</Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/saturday'>Saturday</Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Link tag={RRNavLink} href='/sunday'>Sunday</Link></TableCell>
            </TableRow>
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" tag={RRNavLink} href='/notes'>
          Hold That Thought
        </Link>
      </div>
    </React.Fragment>
  );
}
