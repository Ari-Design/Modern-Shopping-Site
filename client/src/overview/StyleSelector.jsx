import React from 'react';


const StyleSelector = ({ styles, onClick, styleName }) => {

  return (
    styles.map((style, i) => {
      if (i < 8) {
        return <img className="styles" key={style.style_id} style={styleName === style.name ? {border: '5px solid white'} : null} onClick={() => onClick(style)} src={style.photos[0].thumbnail_url}></img>
      }
    })
  );
};

export default StyleSelector;
