import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useForm } from "react-hook-form";

import styles from './Login.module.scss';

import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';

export const Registration = () => {
  //Check if the user is logged in
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError, 
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      fullName: 'fullName',
      email: 'test@test.com',
      password: '123'
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Unbale to register');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  }


  if (isAuth) {
    return <Navigate to="/" />
  }


  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          type="text"
          {...register('fullName', { required: 'Enter your name' })}
          className={styles.field}
          label="Полное имя"
          fullWidth />

        <TextField
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Enter your email' })}
          className={styles.field}
          label="E-Mail"
          fullWidth />

        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.v?.message}
          type="password"
          {...register('password', { required: 'Enter your password' })}
          className={styles.field} label="password"
          fullWidth />

        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
