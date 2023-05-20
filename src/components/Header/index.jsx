import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import logo from './logog.png';




export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);






  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, setPrevScrollPos, setVisible]);

  return (
    <div
      className={styles.root}
      style={{ top: visible ? 0 : '-100px', transition: 'top 0.6s' }}
    >
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <img classname={styles.logos} src={logo} alt='logo' />
            <h1>NJ Porfolio</h1>
          </Link>
          <div className={styles.buttons}>
            <>
              <Link to="#home">
                <Button variant="outlined">Home</Button>
              </Link>
              <Link to="#aboutme">
                <Button variant="outlined">Stats</Button>
              </Link>
              <Link to="#aboutme">
                <Button variant="outlined">About me</Button>
              </Link>
              <Link to="#aboutme">
                <Button variant="outlined">Experience</Button>
              </Link>
              <Link to="#aboutme">
                <Button variant="outlined">Project</Button>
              </Link>
              <Link to="#aboutme">
                <Button variant="outlined">Skills</Button>
              </Link>
            </>
          </div>
          <div className={styles.buttons}>
            <Link to="#hire">
              <Button variant="outlined">Hire Me</Button>
            </Link>
          </div>
          {/* <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Add a project</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="./login">
                  <Button variant="outlined">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Register</Button>
                </Link>
              </>
            )}
          </div> */}
        </div>
      </Container>
    </div>
  );
};