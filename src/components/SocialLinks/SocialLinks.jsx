import React from 'react';
import './sociallinks.css';

const SocialLinks = ({}) => {
  return (
    <div className='links'>
      <a
        aria-label='Link to Nicks GitHub profile'
        href='https://github.com/Nhujarski'
        target='_blank'>
        <img src='/static/icons/github-fill.png' />
      </a>
      <a>
        <img src='/static/icons/instagram-fill.png' />
      </a>
      <a
        href='https://www.linkedin.com/in/nickhujarski/'
        aria-label='Link to Nicks LinkedIn profile'
        target='_blank'>
        <img src='/static/icons/linkedin-box-fill.png' />
      </a>
      <a>
        <img src='/static/icons/twitter-x-fill.png' />
      </a>
    </div>
  );
};

export default SocialLinks;
