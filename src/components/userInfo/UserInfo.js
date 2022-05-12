import React from 'react';
import UserCard from '../UI/UserCard';

const UserInfo = ({ userData }) => {
  return (
    <>
      {userData &&
        userData.map((user) => {
          const { name, avatar_url, id, login } = user;
          return (
            <div className='user-card' key={id}>
              <div className='image-card'>
                <img className='image' alt='user' src={avatar_url} />
              </div>

              <div className='info-card'>
                <div className='username'>{login}</div>
                <div className='name'>{name}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default UserInfo;
