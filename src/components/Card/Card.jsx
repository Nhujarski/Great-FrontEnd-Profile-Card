import React from 'react';

import './card.css';

const Card = ({
  profileImg,
  profileName,
  profileTitle,
  profileBio,
  profileButton,
  profileSocials,
}) => {
  return (
    <div className='card'>
      <div className='card-top'>
        <img
          className='card-img'
          src={profileImg}
          alt='a profile image of a person'
        />
        <header className='card-header'>
          <p className='card-profile-name'>{profileName}</p>
          <p className='card-profile-title'>{profileTitle}</p>
        </header>
        <main className='card-body'>
          <p>{profileBio}</p>
        </main>
      </div>
      <div className='card-bottom'>
        {profileButton}
        {profileSocials}
      </div>
    </div>
  );
};

export default Card;
