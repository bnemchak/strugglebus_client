import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Title from '../LandingPage/Title';

import TaskData from '../../../helpers/data/taskData';

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
  const [tasks, setTasks] = useState([]);
  const getTaskData = () => {
    TaskData.getTaskByID()
      .then((res) => {
        console.log(res);
        setTasks(res.data.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTaskData();
  }, []);
  return (
    <React.Fragment>
      <Title>Tasks</Title>
      <Table size="small">
        <TableBody>
          {tasks && tasks.map((row) => (
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
      <Divider variant="middle" />
      <div className={classes.seeMore}>
        <Link color="primary" href="/notes" onClick={preventDefault}>
          Hold That Thought
        </Link>
      </div>
    </React.Fragment>
  );
}
