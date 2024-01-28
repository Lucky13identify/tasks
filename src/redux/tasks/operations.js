import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  try {
    const { data } = await axios.get('/tasks');
    return data;
  } catch (error) {
    throw error;
  }
});

export const createTask = createAsyncThunk('tasks/addTask', async object => {
  try {
    const { data } = await axios.post('/tasks', object);
    return data;
  } catch (error) {
    throw error;
  }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async id => {
  try {
    const { data } = await axios.delete(`/tasks/${id}`);

    return data;
  } catch (e) {}
});

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, updatedData }) => {
    try {
      const { data } = await axios.put(`/tasks/${id}`, updatedData);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
