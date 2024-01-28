import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, createTask, deleteTask, updateTask } from './operations';

const initialState = {
  tasks: [],
};

const taksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: {
    [fetchTasks.fulfilled](state, action) {
      state.tasks = action.payload;
    },
    [createTask.fulfilled](state, action) {
      state.tasks.push(action.payload);
    },
    [deleteTask.fulfilled](state, action) {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    [updateTask.fulfilled](state, action) {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id
      );
      state.tasks[index] = action.payload;
    },
  },
});

export const tasksReducer = taksSlice.reducer;
