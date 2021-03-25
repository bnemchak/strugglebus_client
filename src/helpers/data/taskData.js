import axios from 'axios';

const url = 'http://127.0.0.1:8000';

const headers = () => (
  {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  }
);

const createHeaders = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

const getTaskByID = (id) => axios.get('http://localhost:8000/tasks', createHeaders);

const updateTasks = (obj, id) => axios.put(`http://localhost:8000/tasks/${id}`, obj, createHeaders);

const deleteTasks = (id) => axios.delete(`http://localhost:8000/tasks/${id}`, headers());

const createTasks = (newArticle) => axios.post('http://localhost:8000/tasks', newArticle, createHeaders);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTaskByID, updateTasks, deleteTasks, createTasks,
};
