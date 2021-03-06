import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/useFetch';
import validateFormInut from '../validateFormInput';
import UserContext from './UserContext';

const BASE_URL = 'https://api.github.com/search/users';

const UserProvider = ({ children }) => {
  const { get, loading } = useFetch(BASE_URL);

  const [fetchedData, setFetchedData] = useState([]);
  const [wrongInput, setWrongInput] = useState({});
  const [userSearchData, setUserSearchData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [searchInput, setSearchInput] = useState({
    userName: '',
    radioInput: '',
  });

  const stateContext = {
    formState: searchInput,
    userData: fetchedData,
    handleSubmitForm: handleSubmitForm,
    handleInputChange: handleInputChange,
    invalidInput: wrongInput,
    userNotFound: userNotFound,
    isLoading: isLoading,
    // loading: loading,
  };

  function handleInputChange(e) {
    const { name, value } = e.target;

    setSearchInput({
      ...searchInput,
      [name]: value.trim(),
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    setWrongInput(validateFormInut(stateContext.formState));

    setUserSearchData(stateContext.formState);

    // console.log(formState);
    setSearchInput({ userName: '', radioInput: '' });
  }

  const { userName, radioInput } = userSearchData;

  useEffect(() => {
    if (!userName) return;

    (async () => {
      setIsLoading(true);

      try {
        if (radioInput === 'org') {
          get(`?q=${userName}+type:org`).then((data) => {
            setIsLoading(false);
            setFetchedData(data.items);
            setUserNotFound(false);

            if (!data.items.length) {
              setUserNotFound(true);
            }
          });
        } else if (radioInput === 'users') {
          get(`?q=${userName}`).then((data) => {
            console.log(data.items);
            setIsLoading(false);
            setFetchedData(data.items);

            setUserNotFound(false);

            if (!data.items.length) {
              setUserNotFound(true);
            }
          });
        } else {
          return;
        }
      } catch (error) {
        console.error(error);
        // setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [radioInput, userName]);

  return (
    <UserContext.Provider value={stateContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
