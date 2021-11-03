import React from 'react';


const ProductInfo = ({ productInfo }) => {

  return (
    <>
      <h3>{productInfo.slogan}</h3>
      <p>{productInfo.description}</p>
      {productInfo.features.map(({ feature, value }, index) => {
        console.log(value)
        return <p key={index - 1}>{`${value} ${feature}`}</p>
      })}
    </>
  )
};

export default ProductInfo;