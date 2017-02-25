import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import {routeCodes} from '../../routes';

const Menu = () => (
  <div className='Menu'>
    <IndexLink to={ routeCodes.HOME}>
      Home
    </IndexLink>
    <Link to={ routeCodes.ABOUT }>
      About
    </Link>
    <Link to='404'>
      404
    </Link>
  </div>
);

export default Menu;
