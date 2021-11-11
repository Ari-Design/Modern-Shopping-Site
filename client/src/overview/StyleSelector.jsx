import React from 'react';


const StyleSelector = ({ styles, onClick }) => {

  return (
    styles.map((style, i) => {
      if (i < 8) {
        return <img className="styles" key={style.style_id} onClick={() => onClick(style)} src={style.photos[0].thumbnail_url}></img>
      }
    })
  );
};

export default StyleSelector;
