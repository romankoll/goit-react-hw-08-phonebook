import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Container, StyledLink } from './Navigation.styled.jsx';

const Navigation = () => {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </Container>
  );
};

export default Navigation;
