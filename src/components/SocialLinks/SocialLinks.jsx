import React from 'react';
import './sociallinks.css';

const SocialLinks = ({}) => {
  return (
    <div className='links'>
      <a
        aria-label='Link to Nicks GitHub profile'
        href='https://github.com/Nhujarski'
        target='_blank'>
        <img src='icons/github-fill.png' />
      </a>
      <a>
        <img src='icons/instagram-fill.png' />
      </a>
      <a>
        <img src='icons/linkedin-box-fill.png' />
      </a>
      <a>
        <img src='icons/twitter-x-fill.png' />
      </a>
    </div>
  );
};

export default SocialLinks;
