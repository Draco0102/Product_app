import React from 'react';
import './loader.scss'; // Import custom CSS for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;