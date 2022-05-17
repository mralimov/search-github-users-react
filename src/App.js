import React from 'react';
import Form from './components/form/Form';
import './App.scss';
import Loader from './components/loader/Loader';
import UserInfo from './components/userInfo/UserInfo';
import useFetch from './components/useFetch/useFetch';

const App = () => {
  const { loading } = useFetch();
  return (
    <>
      <Form />
      {loading && <Loader />}
      <UserInfo />
    </>
  );
};

export default App;
