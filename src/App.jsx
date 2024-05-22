import React, { useEffect } from 'react';
import axios from 'axios';
import ImageUploader from './ImageUploader.jsx';
import './App.css';

import TCnav from './assets/TCnav.png';
import TCbanner from './assets/TCbanner.png';
import TCfooter from './assets/TCfooter.png';

const App = () => {

  return (
    <div className='body'>
      <img className='nav' src={TCnav} alt="Navigation" />
      <img className='banner' src={TCbanner} alt="Banner" />
      <ImageUploader />
      <img className='footer' src={TCfooter} alt="Footer" />
    </div>
  );
};

export default App;
