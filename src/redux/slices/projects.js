import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const { data } = await axios.get('/projects');
  return data;
});


export const fetchRemoveProject = createAsyncThunk('projects/fetchRemoveProject', async (id) =>
  axios.delete(`/projects/${id}`),
);

const initialState = {
  projects: {
    items: [],
    status: 'loading',
  },
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение статей
    [fetchProjects.pending]: (state) => {
      state.projects.items = [];
      state.projects.status = 'loading';
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects.items = action.payload;
      state.projects.status = 'loaded';
    },
    [fetchProjects.rejected]: (state) => {
      state.projects.items = [];
      state.projects.status = 'error';
    },


    // Удаление статьи
    [fetchRemoveProject.pending]: (state, action) => {
      state.projects.items = state.projects.items.filter((proj) => proj._id !== action.meta.arg);
    },
  },
});

export const projectsReducer = projectsSlice.reducer;