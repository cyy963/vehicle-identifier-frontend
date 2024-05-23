import React, { useState } from 'react';
// Import axios for making HTTP requests
import axios from 'axios';
import styles from './ImageUploader.module.css';

// Define the Upload component
const Upload = () => {
  // Declare state variables 'file' and 'result' using the useState hook
  // 'file' will store the selected file, and 'result' will store the API response
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  // Handle the file change event when the user selects a file
  const handleFileChange = (event) => {
    // Set the selected file to the 'file' state variable
    setFile(event.target.files[0]);
  };

  // Handle the form submission event when the user clicks the upload button
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Create a new FormData object to hold the file data
    const formData = new FormData();
    // Append the selected file to the FormData object with the key 'image'
    formData.append('image', file);

    try {
      // Make a POST request to the backend API to upload the image
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData, {
        headers: {
          // Set the content type to 'multipart/form-data'
          'Content-Type': 'multipart/form-data',
        },
      });
      // Set the API response to the 'result' state variable
      setResult(response.data);
    } catch (error) {
      // Log any errors that occur during the request
      console.error(error);
    }
  };

  // Render the component's UI
  return (
    <div className={styles.pageBody}>
      <div className={styles.heading}>
        <h2>Get Car Insurance from the car experts. It’s quick, easy and affordable!</h2>
        <h3>First, let's find out what type of car you have using our latest AI technology.<br /> Please upload an image of your car below:</h3>
      </div>
      <div className={styles.uploader}>
        <form onSubmit={handleSubmit}>
          {/* Input element for selecting a file */}
          <input type="file" onChange={handleFileChange} />
          {/* Button to submit the form */}
          <button type="submit">Upload</button>
        </form>
        <div className={styles.result}>
          <h4>Your Car Type:</h4>
          {/* Display the result if it exists */}
          {result && <h4 className={styles.resultText}> {result.carType.toUpperCase()}</h4>}
        </div>
      </div>
    </div>
  );
};

// Export the Upload component as the default export
export default Upload;
