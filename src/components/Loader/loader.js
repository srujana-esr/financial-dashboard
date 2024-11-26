import React from 'react';
import './loader.css';
import marioRunning from './Loader.gif'; 

const Loader = () => {
  return (
    <div className="loader">
      <img src={marioRunning} alt="Loading..." />
    </div>
  );
};

export default Loader;
