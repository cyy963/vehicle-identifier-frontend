import React, { useState } from 'react';
import axios from 'axios';
import styles from './ImageUploader.module.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://m1-backend-webapp.azurewebsites.net/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.pageBody}>
      <div className={styles.heading}>
        <h2>Get Car Insurance from the car experts. It’s quick, easy and affordable!</h2>
        <h3>First, let's find out what type of car you have using our latest AI technology.<br /> Please upload an image of your car below:</h3>
      </div>
      <div className={styles.uploader}>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
        <h4>Your Car Type:</h4>
        {result && <div><h4> {result.carType.toUpperCase()}</h4></div>}
      </div>
    </div>
  );
};

export default Upload;
