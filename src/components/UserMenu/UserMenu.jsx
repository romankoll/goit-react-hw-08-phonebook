import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/contacts/auth/authOperations';
import { getUserName } from 'redux/contacts/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  // const avatar =

  return (
    <div>
      <div>
        {/* <img src={avatar} alt="" /> */}
        <p>{name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
