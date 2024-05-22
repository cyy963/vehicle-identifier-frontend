import React from 'react';
import ImageUploader from './ImageUploader.jsx';
import './App.css'

import TCnav from './assets/TCnav.png'
import TCbanner from './assets/TCbanner.png'
import TCfooter from './assets/TCfooter.png'


const App = () => {
  return (
    <div className='body'>
      
      <img className='nav' src={TCnav}/>
      <img className='banner' src={TCbanner}/>
      <ImageUploader />
      <img className='footer' src={TCfooter}/>
    </div>
  );
};

export default App;