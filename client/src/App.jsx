import React from 'react';
import axios from 'axios';

import products from '../../sampleData/products/productList.js';
import productInfo from '../../sampleData/products/productInfo.js';
import productStyles from '../../sampleData/products/productStyle.js';
import reviewSample from '../../sampleData/reviews/reviewSample.js';
import reviewMeta from '../../sampleData/reviews/reviewsMeta.js';
import qaSample from '../../sampleData/qaSample.js';


import Container from './overview/Container.jsx';
import QAContainer from './qa/QAContainer.jsx'
import ReviewsList from './Reviews/ReviewsList.jsx';
import Modal from './shared/Modal.jsx'

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
      qaData: qaSample,
      fullscreen: false,
      currentImg: '',
    }
    this.handleIsHelpfulAndReport = this.handleIsHelpfulAndReport.bind(this);
    this.changeFullscreen = this.changeFullscreen.bind(this);
    this.getCurrentImg = this.getCurrentImg.bind(this);
  }

  handleIsHelpfulAndReport(url, data) {
    axios.put(url, data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(`error: ${err}`)
    })
  }

  changeFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  getCurrentImg(obj) {
    this.setState({currentImg: obj})
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <span>Logo</span>
            <span>Search</span>
          </nav>
        </header>
        <main>
          <Container productInfo={this.state.productInfo} productStyles={this.state.productStyles} getCurrentImg={this.getCurrentImg} openFullscreen={this.changeFullscreen}/>
          <QAContainer
            data={this.state.qaData}
            id={this.state.currentProductId}
            handleHandR={this.handleIsHelpfulAndReport}
            productInfo={this.state.productInfo}
          />
          <ReviewsList currentProductId={this.state.currentProductId} reviewData={this.state.reviewData} reviewMeta={this.state.reviewMeta} />
          {this.state.fullscreen ? <Modal onClose={this.changeFullscreen} currentImg={this.state.currentImg} fullscreen={this.state.fullscreen} /> : null}
        </main>
      </div>
    );
  }
}

export default App;