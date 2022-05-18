import React, { useContext } from 'react';
import './_form.scss';
import UserContext from '../state-context/UserContext';

const Form = () => {
  const {
    formState,
    handleInputChange,
    handleSubmitForm,
    invalidInput,
    userNotFound,
  } = useContext(UserContext);

  return (
    <form className='form' onSubmit={handleSubmitForm}>
      <label htmlFor='name-input'>Name:</label>
      <input
        name='userName'
        value={formState.userName}
        id='name-input'
        className='userName-input'
        type='text'
        onChange={handleInputChange}
        placeholder='Enter name'
      />
      {invalidInput.userName && (
        <p className='invalid-message'>{invalidInput.userName}</p>
      )}

      <div className='radio-input__card'>
        <label htmlFor='radio-user'>User:</label>
        <input
          className='radio-button'
          type='radio'
          name='radioInput'
          value='users'
          id='radio-user'
          onChange={handleInputChange}
          checked={formState.radioInput === 'users'}
        ></input>
        <label htmlFor='radio-organization'>Organization:</label>
        <input
          className='radio-button'
          type='radio'
          name='radioInput'
          value='org'
          id='radio-org'
          onChange={handleInputChange}
          checked={formState.radioInput === 'org'}
        ></input>
      </div>
      {invalidInput.radioInput && (
        <p className='invalid-message'>{invalidInput.radioInput}</p>
      )}
      {userNotFound ? (
        <p className='invalid-message'>
          User not found! Please check spelling of the username or select the
          correct button.
        </p>
      ) : (
        ''
      )}
      <input className='submit' type='submit' value='Submit' />
    </form>
  );
};

export default Form;
