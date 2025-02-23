import React, { useState, useEffect } from 'react';
import styles from './slideshow.module.css'; // optional CSS module
import SlideshowPic1 from '../images/slideshowPic.png';
import SlideshowPic2 from '../images/slideshowPic2.png';
import SlideshowPic3 from '../images/slideshowPic3.png';

function Slideshow() {
  // An array of image paths or URLs
  const images = [
    SlideshowPic1,
    SlideshowPic2,
    SlideshowPic3,
  ];

  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Optionally, you can also have next/prev buttons
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slideshowContainer}>
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className={styles.slideshowImage}
      />

      {/* Optional navigation buttons */}
      <button onClick={goToPrev} className={styles.navButton}>
        Prev
      </button>
      <button onClick={goToNext} className={styles.navButton}>
        Next
      </button>
    </div>
  );
}

export default Slideshow;
