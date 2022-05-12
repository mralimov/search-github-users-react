import React, { useState, useEffect } from 'react';
import Form from './components/form/Form';
import './App.scss';
import Loader from './components/loader/Loader';
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
  return <Form setUserName={setUserName} setRadioInput={setRadioInput} />;
};

export default App;
