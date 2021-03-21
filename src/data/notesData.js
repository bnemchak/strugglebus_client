import axios from 'axios';

const url = 'http://localhost:3000';

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

const getAllNotes = () => axios.get(`${url}/notes`, headers());

const deleteNote = (id) => axios.delete(`${url}/notes/${id}`, headers());

const addNotes = (obj) => axios.post(`${url}/notes`, obj, createHeaders);

const updateNotes = (obj, id) => axios.put(`${url}/notes/${id}`, obj, createHeaders);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllNotes, deleteNote, addNotes, updateNotes,
};
