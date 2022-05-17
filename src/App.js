import React from 'react';
import Form from './components/form/Form';
import './App.scss';
import Loader from './components/loader/Loader';
import UserInfo from './components/userInfo/UserInfo';
import useFetch from './components/useFetch/useFetch';

const App = () => {
  return (
    <UserProvider>
      <Form />;{/* {loading && <Loader />}; */}
      <UserInfo />
    </UserProvider>
  );
};

export default App;
