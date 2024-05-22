import React, { useEffect } from 'react';
import axios from 'axios';
import ImageUploader from './ImageUploader.jsx';
import './App.css';

import TCnav from './assets/TCnav.png';
import TCbanner from './assets/TCbanner.png';
import TCfooter from './assets/TCfooter.png';

const App = () => {
  // Function to check the health of the backend API
  const checkHealth = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/healthCheck`);
      console.log(response.data); // Should log 'API is running'
    } catch (error) {
      console.error('Health check failed:', error);
    }
  };

  // Use useEffect to call the health check function when the component mounts
  useEffect(() => {
    checkHealth();
  }, []);

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
