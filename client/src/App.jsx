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
      answerForm: false,
      questionForm: false,
      reviewForm: false,
      currentImg: '',
    }
    this.handleIsHelpfulAndReport = this.handleIsHelpfulAndReport.bind(this);
    this.changeModal = this.changeModal.bind(this);
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

  changeModal(state) {
    this.setState({ [state]: !this.state[state] });
  }

  getCurrentImg(obj) {
    this.setState({ currentImg: obj })
  }

  render() {
    var { productInfo, productStyles, qaData, currentProductId, reviewData, reviewMeta,
      fullscreen, answerForm, currentImg, questionForm, reviewForm } = this.state;
    return (
      <div>
        <header>
          <nav>
            <span>Logo</span>
            <span>Search</span>
          </nav>
        </header>
        <main>
          <Container productInfo={productInfo}
            productStyles={productStyles}
            getCurrentImg={this.getCurrentImg}
            openFullscreen={this.changeModal} />

          <QAContainer
            data={qaData}
            id={currentProductId}
            handleHandR={this.handleIsHelpfulAndReport}
            openAnswerForm={this.changeModal}
            productInfo={productInfo} />

          <ReviewsList currentProductId={currentProductId}
            reviewData={reviewData}
            openReviewForm={this.changeModal}
            reviewMeta={reviewMeta} />

          {fullscreen || answerForm || questionForm || reviewForm ? <Modal
            onClose={this.changeModal}
            currentImg={currentImg}
            answerForm={answerForm}
            questionForm={questionForm}
            reviewForm={reviewForm}
            fullscreen={fullscreen} /> : null}
        </main>
      </div>
    );
  }
}

export default App;