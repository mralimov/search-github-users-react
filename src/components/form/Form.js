import React, { useState } from 'react';
import './_form.scss';

const Form = ({ setUserName, setRadioInput }) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [radioSelect, setRadioSelect] = useState('');
  const [formValidation, setFormValidation] = useState(false);
  const [enteredNameChanged, setEnteredNameChanged] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameChanged(true);
    if (userNameInput == '') {
      setFormValidation(false);
      return;
    }
    setFormValidation(true);
    setUserName(userNameInput);
    setRadioInput(radioSelect);
    setUserNameInput('');
    setFormValidation(false);
    setEnteredNameChanged(false);
  };

  const userNameHandler = (e) => {
    setUserNameInput(e.target.value.trim());
  };
  const nameInputIsInvalid = !formValidation && enteredNameChanged;

  const nameInputClass = nameInputIsInvalid ? 'invalid' : 'valid';

  return (
    <form className='form' onSubmit={submitHandler}>
      <label htmlFor='name-input'>Name:</label>
      <input
        name='name'
        value={userNameInput}
        id='name-input'
        className={nameInputClass}
        type='text'
        onChange={userNameHandler}
        placeholder='Enter name'
      />
      {nameInputIsInvalid && <p className='invalid-message'>User not found.</p>}
      <div>
        <label htmlFor='radio-user'>User:</label>
        <input
          className='radio-button'
          type='radio'
          name='users'
          value='users'
          id='radio-user'
          onChange={(e) => setRadioSelect(e.target.value)}
          checked={radioSelect === 'users'}
        ></input>
        <label htmlFor='radio-organization'>Organization:</label>
        <input
          className='radio-button'
          type='radio'
          name='org'
          value='org'
          id='radio-org'
          onChange={(e) => setRadioSelect(e.target.value)}
          checked={radioSelect === 'org'}
        ></input>
      </div>

      <input className='submit' type='submit' value='Submit' />
    </form>
  );
};

export default Form;
