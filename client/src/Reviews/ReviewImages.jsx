import React from 'react';

var ReviewImages = ({photos}) => {
  console.log(photos)
  return photos.map((photo) => {
    return (
      <img className="thumbnail" src={photo.url}/>
    )
  })
}

export default ReviewImages;