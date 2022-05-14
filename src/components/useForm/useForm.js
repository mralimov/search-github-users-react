import React, { useState } from 'react';

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
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setInvalidInput(validateInput(formState));
  };

  return { invalidInput, handleInputChange, formState, handleSubmitForm };
};

export default useForm;
