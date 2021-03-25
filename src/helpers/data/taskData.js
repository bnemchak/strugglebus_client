import axios from 'axios';

const url = 'http://127.0.0.1:8000';

const createHeaders = {
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

const getTaskByID = (id) => axios.get('http://localhost:8000/tasks', createHeaders);

export default { getTaskByID };
