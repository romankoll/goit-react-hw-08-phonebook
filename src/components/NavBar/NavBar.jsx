import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contacts/auth/authSelectors';

const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default NavBar;
