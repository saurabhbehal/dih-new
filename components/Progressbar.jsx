'use client' 
import React, { useState, useEffect } from 'react';
import TopLoadingBar from 'react-top-loading-bar';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));

      // Set isLoading to false after reaching 100%
      if (progress >= 100) {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <TopLoadingBar
      color="#eb595f" // You can adjust the color
      progress={progress}
      onLoaderFinished={() => setIsLoading(false)}
      loaderSpeed={1000} // Adjust the loader speed as needed
      className={isLoading ? '' : 'hidden'} // Use the 'hidden' class when isLoading is false
    />
  )
};

export default ProgressBar;

