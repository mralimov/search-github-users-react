import React, { useContext } from 'react';
import UserContext from '../state-context/UserContext';
import './_userInfo.scss';

const UserInfo = () => {
  const { userData } = useContext(UserContext);
  return (
    <>
      {userData.map((user) => {
        const { avatar_url, id, login } = user;
        return (
          <div className='user-card' key={id}>
            <img className='user-image' alt='user' src={avatar_url} />

            <div className='user-info'>
              <h2 className='username'>{login}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserInfo;
