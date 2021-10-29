import React from 'react';
import Gallery from './Gallery.jsx';

const Container = () => {

  return (
    <div className="overview_container" >
      <div className="whitespace_left"></div>
      <div className="gallery_container"><Gallery /></div>
      <div className="styles_container"></div>
      <div className="productInfo_container"></div>
      <div className="whitespace_right"></div>
    </div>
  );
};

export default Container;