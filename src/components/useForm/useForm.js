import { useState, useEffect } from 'react';
import useFetch from '../useFetch/useFetch';
const BASE_URL = 'https://api.github.com/search/users';

const useForm = (validateInput) => {
  const [formState, setFormState] = useState({
    username: '',
    radioInput: '',
  });
  const [invalidInput, setInvalidInput] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value.trim(),
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setInvalidInput(validateInput(formState));
  };

  const { get, loading } = useFetch(BASE_URL);

  const { userName, radioInput } = userSearchData;

  useEffect(() => {
    if (!userName) return;
    (async () => {
      try {
        if (radioInput === 'org') {
          get(`?q=${userName}+type:org`).then((data) => {
            if (!data.items.length) {
              setUserNotFound(true);
            }
            console.log(data.items);
            setUserData(data.items);
          });
        } else {
          get(`?q=${userName}`).then((data) => {
            if (!data.items.length) {
              setUserNotFound(true);
            }
            console.log(data.items);

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

  return {
    handleInputChange,
    formState,
    handleSubmitForm,
    userNotFound,
    invalidInput,
    userData,
    isLoding,
    loading,
  };
};

export default useForm;
