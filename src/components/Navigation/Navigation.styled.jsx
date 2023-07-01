import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;

  color: inherit;
  text-decoration: none;

  &.hover,
  &.active {
    color: orange;
    text-decoration: underline;
  }
`;
