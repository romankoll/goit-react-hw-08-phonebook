import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import { Box, Text } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  // const avatar =

  return (
    <Box>
      <Text>{name}</Text>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        sx={{ m: 1 }}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
