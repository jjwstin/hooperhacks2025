// Instead of react-slick, a single image
import React from 'react';
import bigImage from '../images/slideshowPic.png';

function Slideshow() {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <img
        src={bigImage}
        alt="Promotional"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}

export default Slideshow;
