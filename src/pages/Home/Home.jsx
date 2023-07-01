import React from 'react';

import css from 'pages/Home/Home.module.css';

const Home = () => {
  return (
    <div className={css['container']}>
      <h3 className={css['text']}>
        The application is a secure contact management system that allows users
        to store their contacts while ensuring data protection through
        verification. Users can create an account and log in to access their
        personalized contact list. The application implements a robust
        verification process to ensure the security and authenticity of user
        information.
      </h3>
    </div>
  );
};

export default Home;
