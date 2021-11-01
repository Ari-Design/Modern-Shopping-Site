import React from 'react';
import Gallery from './Gallery.jsx';

const Container = (props) => {
  // console.log(props);
  return (
    <div className="overview_container" >
      <div className="gallery_container"><Gallery /></div>
      <section className="styles_container"></section>
      <section className="productInfo_container"></section>
    </div>
  );
};

export default Container;