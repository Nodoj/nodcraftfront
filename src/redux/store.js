import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { projectsReducer } from './slices/projects'
import { authReducer } from './slices/auth';


const store = configureStore({
  reducer: {
    posts: postsReducer,
    projects: projectsReducer,
    auth: authReducer

  },
});

export default store;