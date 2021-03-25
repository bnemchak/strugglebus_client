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
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Edit from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Title from '../LandingPage/Title';

import TaskData from '../../../helpers/data/taskData';

function preventDefault(event) {
  event.preventDefault();
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    paper: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: theme.spacing(2, 4, 3),
    },
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [label, setLabel] = useState([]);
  const [updating, setUpdating] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const getTaskData = () => {
    TaskData.getTaskByID()
      .then((res) => {
        console.log(res);
        setTasks(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTaskData();
  }, []);

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (tasksId) => {
    setOpen(true);
    setUpdating(true);
    setTaskId(tasksId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const taskUpdate = (e) => {
    e.preventDefault();
    setLabel(e.target.value);
  };

  const submitTask = (e) => {
    e.preventDefault();
    const task = { name: label, completed: false };
    const jsonTask = JSON.stringify(task);

    if (updating) {
      TaskData.updateTasks(jsonTask, taskId)
        .then(() => {
          setLabel('');
          this.getTasksById();
        })
        .catch((err) => console.error(err));
    } else {
      TaskData.createTasks(jsonTask)
        .then(() => {
          setLabel('');
          this.getTasksByIdß();
        })
        .catch((err) => console.error(err));
    }
  };

  const deleteTasks = (Id) => {
    console.log(Id);
    TaskData.deleteTasks(Id)
      .then(() => { this.getTaskByID(); })
      .catch((err) => console.error(err));
  };

  return (
    <React.Fragment>
      <Title>Tasks <TextField id="standard-basic" label="Add" onChange={taskUpdate} /><CheckCircleIcon name="submit" onClick={submitTask} /></Title>
      <Table size="small">
        <TableBody>
          {tasks && tasks.map((row) => (
            <TableRow key={row.id}>
              <Link href="/{row.name}" onClick={preventDefault}>
              <TableCell>
              <FormControlLabel control={ <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />} label={row.name}/>
              <HighlightOffIcon name="delete" onClick={() => { deleteTasks(row.id); }} />
              <Edit name="edit" onClick={() => { handleOpen(row.id); }} id={row.id} />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        color="white"
      >
        <Card>
        <CardContent>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Edit" onChange={taskUpdate}/>
        <CheckCircleIcon name="submit" onClick={submitTask} />
      </form>
      </CardContent>
      </Card>
      </Modal>
    </React.Fragment>
  );
}
