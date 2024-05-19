// src/components/Upload.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './ImageUploader.module.css'

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
            const response = await axios.post('http://localhost:5001/upload', formData, {
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
        <div>
          <div className={styles.heading}>
            <h1>Turners Cars</h1>
            <h2>Get Car Insurance from the car experts.  It’s quick, easy and affordable.</h2>
            <h3>First, lets find out what type of car you have using our latest AI technology, please upload an image of your car below!</h3>
          </div>
          <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileChange} />
              <button type="submit">Upload</button>
          </form>
          {result && <div>Car Type: {result.carType}</div>}
        </div>
    );
};

export default Upload;
