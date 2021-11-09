import React from 'react';
import axios from 'axios';

import Container from './overview/Container.jsx';
import QAContainer from './qa/QAContainer.jsx'
import ReviewsList from './Reviews/ReviewsList.jsx';
import Modal from './shared/Modal.jsx'
import Dropdown from './shared/Dropdown.jsx';

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
    this.handleIsHelpfulAndReport = this.handleIsHelpfulAndReport.bind(this);
    this.changeModal = this.changeModal.bind(this);
    this.getCurrentImg = this.getCurrentImg.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.chooseProduct = this.chooseProduct.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.updateQaData = this.updateQaData.bind(this);
    this.updateReviewData = this.updateReviewData.bind(this);
  }

  getProducts() {
    axios.get('/products')
      .then((res) => {
        this.setState({
          products: res.data
        })
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  componentDidMount() {
    this.getProducts();
    this.fetchData(37311)
  }

  chooseProduct(e) {
    var id = Number(e.target.value)
    this.fetchData(id)
  }

  fetchData(id) {
    const getInfo = axios.get(`/products/${id}`);
    const getStyles = axios.get(`/products/${id}/styles`);
    const getReviewData = axios.get('/reviews', { params: { product_id: id } });
    const getReviewMeta = axios.get('/reviews/meta', { params: { product_id: id } });
    const getQaData = axios.get('/qa/questions', { params: { product_id: id } });

    axios.all([getInfo, getStyles, getReviewData, getReviewMeta, getQaData])
      .then(axios.spread((...data) => {
        this.setState({
          currentProductId: id,
          productInfo: data[0].data,
          productStyles: data[1].data,
          reviewData: data[2].data,
          reviewMeta: data[3].data,
          qaData: data[4].data
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
        console.log(res.data)
        this.setState({
          qaData: res.data
        })
      })
      .catch((err) => {
        console.log(`error: ${err}`)
      })
  }

  handleIsHelpfulAndReport(url, data, callback) {
    axios.put(url, data)
      .then((res) => {
        callback
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

  getCurrentImg(obj) {
    this.setState({ currentImg: obj })
  }

  render() {
    var { productInfo, productStyles, qaData, currentProductId, reviewData, reviewMeta,
      fullscreen, answerForm, currentImg, questionForm, reviewForm, currentQuestion } = this.state;

    var products = this.state.products.map((product) => product.id);

    return (
      <div>
        <header>
          <nav>
            <span>Logo</span>
            <span>Search</span>
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
            handleHandR={this.handleIsHelpfulAndReport}
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
            answerForm={answerForm}
            questionForm={questionForm}
            reviewForm={reviewForm}
            fullscreen={fullscreen}
            qaData={this.state.qaData}
            updateQaData={this.updateQaData}
            currentQuestion={currentQuestion}
            productInfo={productInfo} /> : null}
        </main>
      </div>
    );
  }
}

export default App;