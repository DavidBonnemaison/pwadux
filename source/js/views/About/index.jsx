import React, {Component} from 'react';

const About = () => (
  <div className='About'>
    <h2>About</h2>
    <p>This aims to be a Progressive Web App.
      See <a href='https://github.com/crealpha/pwadux' target='_blank'>github.com/crealpha/pwadux</a>.
    </p>
    <h2>Progress</h2>
    <strong style={{
      color: 'red'
    }}>29/100</strong>
    <h2>What's left to do ?</h2>
    <p>
      <input type="checkbox" checked disabled/> Webpack 2, React, Redux<br />
      <input type="checkbox" checked disabled/> Functionnal React, no class<br />
      <input type="checkbox" checked disabled/> Mobile friendly<br />
      <input type="checkbox" disabled/> Service worker : offline management<br />
      <input type="checkbox" disabled/> Page load performance<br />
      <input type="checkbox" disabled/> Content when javascript is disabled<br />
      <input type="checkbox" disabled/> Add to homescreen<br />
      <input type="checkbox" disabled/> Add to homescreen<br />
      <input type="checkbox" disabled/> Custom splash screen<br />
      <input type="checkbox" disabled/> Address bar matches brand colors<br />
    </p>
  </div>
);

export default About;
