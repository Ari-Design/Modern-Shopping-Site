import React from 'react';

import products from '../../sampleData/products/productList.js';
import productInfo from '../../sampleData/products/productInfo.js';
import productStyles from '../../sampleData/products/productStyle.js';
import reviewSample from '../../sampleData/reviews/reviewSample.js';
import reviewMeta from '../../sampleData/reviews/reviewsMeta.js';
import qaSample from '../../sampleData/qaSample.js';

import Container from './overview/Container.jsx';
import QAContainer from './qa/QAContainer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProductId: 37311,
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
          <Container />
        </div>
        <div>
          <QAContainer
            data={this.state.qaData}
            id={this.state.currentProductId}
          />
        </div>
        <div>
          Ratings and Reviews Component
        </div>
      </div>
    )
  }
}

export default App;