import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Project.module.scss';
import { UserInfo } from '../UserInfo';
import { ProjectSkeleton } from './Skeleton';
import { fetchRemoveProject } from '../../redux/slices/projects';

export const Project = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  children,
  isFullProject,
  isLoading,
  isProjectEditable,
}) => {
  const dispatch = useDispatch();
  if (isLoading) {
    return <ProjectSkeleton />;
  }

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить статью?')) {
      dispatch(fetchRemoveProject(id));
    }
  };

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullProject })}>
      {isProjectEditable && (
        <div className={styles.editButtons}>
          <Link to={`/projects/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullProject })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullProject })}>
            {isFullProject ? title : <Link to={`/projects/${id}`}>{title}</Link>}
          </h2>
         
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.projectDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
