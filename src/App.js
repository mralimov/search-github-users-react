import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/form/Form';
import './App.scss';
import Loader from './components/loader/Loader';
import UserInfo from './components/userInfo/UserInfo';
const BASE_URL = 'https://api.github.com/search/users';
import useFetch from './components/useFetch/useFetch';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [radioInput, setRadioInput] = useState('');

  const { get } = useFetch(BASE_URL);

  useEffect(() => {
    if (!userName) return;
    (async () => {
      try {
        if (radioInput === 'org') {
          setIsLoading(true);

          get(`?q=${userName}+type:org`).then((data) => {
            setUserData(data.items);
          });
        } else {
          setIsLoading(true);

          get(`?q=${userName}`).then((data) => {
            setUserData(data.items);
          });
        }
        console.log(userName);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [radioInput, userName]);

  console.log(userData);
  return (
    <Fragment>
      <Form setUserName={setUserName} setRadioInput={setRadioInput} />;
      {isLoding && <Loader />};
      <UserInfo userData={userData} />
    </Fragment>
  );
};

export default App;
