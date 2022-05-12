import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/form/Form';
import './App.scss';
import Loader from './components/loader/Loader';
import UserInfo from './components/userInfo/UserInfo';
const BASE_URL = 'https://api.github.com/search/users';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [radioInput, setRadioInput] = useState('');

  useEffect(() => {
    if (!userName) return;
    (async () => {
      try {
        if (radioInput === 'org') {
          const response = await fetch(`${BASE_URL}?q=${userName}+type:org`);
          const data = await response.json();
          setUserData(data.items);
        } else {
          const response = await fetch(`${BASE_URL}?q=${userName}`);
          const data = await response.json();
          setUserData(data.items);
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
      <UserInfo userData={userData} />
    </Fragment>
  );
};

export default App;
