import React, { useState } from 'react';
import './_form.scss';

const Form = ({ setUserName, setRadioInput }) => {
  const [userNameInput, setUserNameInput] = useState('');
  const [radioSelect, setRadioSelect] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
    setRadioInput(radioSelect);
    setUserNameInput('');
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <label htmlFor='name-input'>Name:</label>
      <input
        name='name'
        value={userNameInput}
        id='name-input'
        type='text'
        onChange={(e) => setUserNameInput(e.target.value)}
        placeholder='Enter name'
      />

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
