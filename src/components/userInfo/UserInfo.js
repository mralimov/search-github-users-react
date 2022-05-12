import React from 'react';
import './_userInfo.scss';

const UserInfo = ({ userData }) => {
  return (
    <>
      {userData &&
        userData.map((user) => {
          const { name, avatar_url, id, login } = user;
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
