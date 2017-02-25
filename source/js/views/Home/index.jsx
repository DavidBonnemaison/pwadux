import React, {PropTypes} from 'react';
import bookImg from '../../../assets/img/book2.jpg';

const Home = ({
  asyncData,
  asyncError,
  asyncLoading,
  counter,
  handleAsyncButtonClick,
  handleTestButtonClick
}) => (
  <div className='Home'>
    <h2>Examples</h2>
    <hr />
    <div>
      <h3>Synchronous action</h3>
      <p>{ counter }</p>
      <button onClick={ handleTestButtonClick }>
        Increase counter
      </button>
    </div>
    <hr />
    <div>
      <h3>Async action example</h3>
      <p>{ asyncData }</p>
      { asyncLoading && <p>Loading...</p> }
      { asyncError && <p>Error: { asyncError }</p> }
      <button
        disabled={ asyncLoading }
        onClick={ handleAsyncButtonClick }
      >
        Get async data
      </button>
    </div>
    <hr />
    <div>
      <h3>Background image</h3>
      <div className='BackgroundImgExample'/>

      <h3>Image imported to the component</h3>
      <img src={ bookImg } alt='' className='ImgExample'/>
    </div>
  </div>
);

export default Home;
