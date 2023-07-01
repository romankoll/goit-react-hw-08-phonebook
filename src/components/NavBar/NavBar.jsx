// import { AppBar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { AppBar } from './NavBar.styled';

const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <AppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};

export default NavBar;
