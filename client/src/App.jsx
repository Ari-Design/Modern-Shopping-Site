import React from 'react';
import axios from 'axios';

import Container from './overview/Container.jsx';
import QAContainer from './qa/QAContainer.jsx'
import ReviewsList from './Reviews/ReviewsList.jsx';
import Modal from './shared/Modal.jsx'
import Dropdown from './shared/Dropdown.jsx';
import mountainLogo from '../../dist/assets/images/mountain-logo.png';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProductId: '',
      products: [],
      productInfo: {},
      productStyles: { results: [{ 'style_id': '' }] },
      reviewData: { results: [] },
      reviewMeta: {},
      qaData: { results: [] },
      currentQuestion: null,
      fullscreen: false,
      answerForm: false,
      questionForm: false,
      reviewForm: false,
      currentImg: '',
    }

    this.changeModal = this.changeModal.bind(this);
    this.getCurrentImg = this.getCurrentImg.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.chooseProduct = this.chooseProduct.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.updateQaData = this.updateQaData.bind(this);
    this.updateReviewData = this.updateReviewData.bind(this);
  }

  componentDidMount() {
    this.fetchData(37311)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.qaData != this.state.qaData) {
      this.setState({
        currentProductId: prevState.currentProductId
      })
    }
  }

  chooseProduct(e) {
    var id = Number(e.target.value)
    this.fetchData(id)
  }

  fetchData(id) {
    const getProducts = axios.get('/products');
    const getInfo = axios.get(`/products/${id}`);
    const getStyles = axios.get(`/products/${id}/styles`);
    const getReviewData = axios.get('/reviews', { params: { product_id: id } });
    const getReviewMeta = axios.get('/reviews/meta', { params: { product_id: id } });
    const getQaData = axios.get('/qa/questions', { params: { product_id: id } });

    axios.all([getProducts, getInfo, getStyles, getReviewData, getReviewMeta, getQaData])
      .then(axios.spread((...data) => {
        this.setState({
          currentProductId: id,
          products: data[0].data,
          productInfo: data[1].data,
          productStyles: data[2].data,
          reviewData: data[3].data,
          reviewMeta: data[4].data,
          qaData: data[5].data
        })
      }))
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }
  updateReviewData() {
    axios.get('/reviews', { params: { product_id: this.state.currentProductId } })
      .then((res) => {
        this.setState({
          reviewData: res.data
        })
      })
      .catch((err) => {
        console.log('error')
      })
  }
  updateQaData(id) {
    axios.get('/qa/questions', { params: { product_id: id } })
      .then((res) => {
        this.setState({
          qaData: res.data
        })
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  selectQuestion(question) {
    this.setState({
      currentQuestion: question
    })
  }

  changeModal(state) {
    this.setState({ [state]: !this.state[state] });
  }

  getCurrentImg(img, pages) {
    this.setState({
      currentImg: img,
      pages: pages,
    })
  }

  render() {
    var { productInfo, productStyles, qaData, currentProductId, reviewData, reviewMeta,
      fullscreen, answerForm, currentImg, questionForm, reviewForm, currentQuestion, pages, isDarkmode} = this.state;

    var products = this.state.products.map((product) => product.id);

    return (
      <div>
        <header className="page_top">
          <nav>
            <img src={mountainLogo} className="logo" />
            <span className="product_search">
              <Dropdown title="chooseProduct" optionsArr={products} onChange={this.chooseProduct} />
            </span>
          </nav>
        </header>
        <main>
          <Container productInfo={productInfo}
            productStyles={productStyles}
            getCurrentImg={this.getCurrentImg}
            openFullscreen={this.changeModal}
            reviewData={reviewData} />

          <QAContainer
            data={qaData}
            id={currentProductId}
            openAnswerForm={this.changeModal}
            productInfo={productInfo}
            selectQuestion={this.selectQuestion}
            updateQaData={this.updateQaData}
          />

          <ReviewsList currentProductId={this.state.currentProductId}
            reviewData={reviewData}
            openReviewForm={this.changeModal}
            reviewMeta={reviewMeta}
            updateReviewData={this.updateReviewData}
          />

          {fullscreen || answerForm || questionForm || reviewForm ? <Modal
            onClose={this.changeModal}
            currentImg={currentImg}
            pages={pages}
            answerForm={answerForm}
            questionForm={questionForm}
            reviewForm={reviewForm}
            fullscreen={fullscreen}
            qaData={this.state.qaData}
            updateQaData={this.updateQaData}
            currentQuestion={currentQuestion}
            productInfo={productInfo}
            reviewMeta={reviewMeta}
            /> : null}
        </main>
      </div>
    );
  }
}

export default App;