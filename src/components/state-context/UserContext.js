import { createContext } from 'react';

const UserContext = createContext({
  formState: { userName: '', radioInput: '' },
  userData: [],
  handleSubmitForm: (e) => {},
  handleInputChange: (e) => {},
  invalidInput: {},
  userNotFound: false,
  isLoading: false,
  loading: false,
});

export default UserContext;
