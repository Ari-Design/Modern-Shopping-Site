import React from 'react';


const ProductInfo = ({ productInfo }) => {

  return (
    <>
      <div className="slogan_description">
        <h3>{productInfo.slogan}</h3>
        <p>{productInfo.description}</p>
      </div>
      <div className="features">
        {productInfo.features.map(({ feature, value }, index) => {
          // console.log(value)
          return <p key={index - 1}>{`${value} ${feature}`}</p>
        })}
      </div>
    </>
  )
};

export default ProductInfo;