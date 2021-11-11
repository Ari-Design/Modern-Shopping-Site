import React from 'react';

var ReviewImages = ({photos}) => {
  return photos.map((photo) => {
    return (
      <img className="thumbnail" src={photo.url}/>
    )
  })
}

export default ReviewImages;