import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Title from '../LandingPage/Title';

// Generate Order Data
function createData(id, name) {
  return {
    id, name,
  };
}

const rows = [
  createData(0, 'Sertaline 100mg', false),
  createData(1, 'Cryselle 28', false),
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
              <TableCell>
                <FormControlLabel control={ <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={row.name}/>
              </TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
