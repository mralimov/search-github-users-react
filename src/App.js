import React, { useContext } from 'react';
import Form from './components/form/Form';
import './App.scss';
import Loader from './components/loader/Loader';
import UserInfo from './components/userInfo/UserInfo';
import useFetch from './components/useFetch/useFetch';
import UserCard from './components/UI/UserCard';
import UserContext from './components/state-context/UserContext';

const App = () => {
  const { loading } = useFetch();
  const { isLoading } = useContext(UserContext);

  console.log(isLoading);
  return (
    <>
      <Form />
      {isLoading && <Loader />}
      <div className='result'>
        <UserCard />
      </div>
      {/* <UserInfo /> */}
    </>
  );
};

export default App;
