import React from 'react';
import products from '../../sampleData/products/productList.js';
import productInfo from '../../sampleData/products/productInfo.js';
import productStyles from '../../sampleData/products/productStyle.js';
import reviewSample from '../../sampleData/reviews/reviewSample.js';
import reviewMeta from '../../sampleData/reviews/reviewMeta.js';
import qaSample from '../../sampleData/qaSample.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: null,
      products: products,
      productInfo: productInfo,
      productStyles: productStyles,
      reviewData: reviewSample,
      reviewMeta: reviewMeta,
      qaData: qaSample
    }
  }

  render() {
    return (
      <div>
        <nav>
          <span>Logo</span>
          <span>Search</span>
        </nav>
        <div>
          Overview Component
        </div>
        <div>
          Q/A Component
        </div>
        <div>
          Ratings and Reviews Component
        </div>
      </div>
    )
  }
}

export default App;