import React, {PropTypes} from 'react';

import Menu from 'components/Global/Menu';

const App = ({children}) => (
  <div className='App'>
    <Menu />
    <div className='Page'>
      { children }
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
