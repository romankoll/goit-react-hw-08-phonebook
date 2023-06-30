// import { lazy } from 'react';
import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './route/PrivateRoute';
// import Contacts from './pages/Contacts/Contacts';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';

const Home = lazy(() => import('././pages/Home/Home'));
const Contacts = lazy(() => import('././pages/Contacts/Contacts'));
const Register = lazy(() => import('././pages/Register/Register'));
const Login = lazy(() => import('././pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
