import React from 'react';
import Card from './components/Card/Card.jsx';
import Button from './components/Button/Button.jsx';
import SocialLinks from './components/SocialLinks/SocialLinks.jsx';

import './App.css';

function App() {
  return (
    <div className='page-layout'>
      <Card
        profileImg={'img/linkedinPhoto.png'}
        profileName={'Nickolas Hujarski'}
        profileTitle={'Frontend Engineer'}
        profileBio={
          'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.'
        }
        profileButton={<Button buttonText='Contact Me' />}
        profileSocials={<SocialLinks />}
      />
    </div>
  );
}

export default App;
