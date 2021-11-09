import React from 'react';


const ProductInfo = ({ productInfo }) => {
  productInfo.features = productInfo.features || [];
  return (
    <>
      <div className="slogan_description">
        <h3 style={{margin: 0}}>{productInfo.slogan}</h3>
        <p>{productInfo.description}</p>
      </div>
      <div className="features">
        {productInfo.features.map(({ feature, value }, index) => {
          return <p style={{marginTop: 0}} key={index - 1}>{`${value} ${feature}`}</p>
        })}
      </div>
    </>
  )
};

export default ProductInfo;