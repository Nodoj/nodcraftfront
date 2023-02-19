import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import styles from './Postgrid.module.scss'
import  {Post}  from '../../../components/Post';
import { fetchPosts } from '../../../redux/slices/posts';
import { fetchProjects } from '../../../redux/slices/projects';


// This component displays the home page of the web application
export const Postgrid = () => {
// Dispatch hook is used to dispatch an action to the store.
const dispatch = useDispatch();
// userData hook is used to select the user data from the store.
const userData = useSelector(state => state.auth.data);
// Select posts, tags data from the store using useSelector hook.
const { posts, tags } = useSelector(state => state.posts);
// Select projects data from the store using useSelector hook.
const { projects } = useSelector(state => state.projects)

// Check if posts are still loading.
const isPostsLoading = posts.status === 'loading';

// useEffect hook is used to fetch posts and projects data on component mount.
React.useEffect(() => {
dispatch(fetchPosts());
dispatch(fetchProjects());
// Empty dependency array ensures that the effect is only run on mount.
}, []);


return (
<>
<div className={styles.root}>
      <Grid container spacing={20}>
        <Grid xs={20} item>
          <Grid container spacing={2} direction="row" justify="space-between" alignItems="flex-start">
            {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => isPostsLoading ? (
              <Grid xs={4} item key={index}>
                <Post isLoading={true} />
              </Grid>
            ) : (
              <Grid xs={4} item key={obj._id}>
                <Post
                  id={obj._id}
                  title={obj.title}
                  imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  commentsCount={3}
                  tags={obj.tags}
                  isEditable={userData?._id === obj.user._id}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
</div>
    </>
  );
};
