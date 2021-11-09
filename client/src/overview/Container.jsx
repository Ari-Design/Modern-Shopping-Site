import React from 'react';
import Gallery from './Gallery.jsx';
import Styles from './Styles.jsx';
import ProductInfo from './ProductInfo.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.productStyles.results[0],
    };
    this.changeStyle = this.changeStyle.bind(this);
  }

  componentDidUpdate(prevProps) {
    var prevStyle = prevProps.productStyles.results[0];
    var currentStyle = this.props.productStyles.results[0];
    if (prevStyle['style_id'] !== currentStyle['style_id']) {
      this.changeStyle(currentStyle);
    }
  }

  changeStyle(obj) {
    this.setState({
      currentStyle: obj
    });
  }

  render() {
    var { getCurrentImg, openFullscreen, productStyles, productInfo, reviewData } = this.props;
    return (
      <div className="overview_container" >
        <div className="gallery_container">
          <Gallery key={productStyles.product_id}
            openFullscreen={openFullscreen}
            getCurrentImg={getCurrentImg}
            currentStyle={this.state.currentStyle}
          />
        </div>

        <section className="styles_container" >
          <Styles productStyles={productStyles.results}
            currentStyle={this.state.currentStyle}
            onClick={this.changeStyle}
            productInfo={productInfo}
            reviews={reviewData.results.length}
          />
        </section>

        <section className="productInfo_container"><ProductInfo productInfo={productInfo} /></section>
      </div>
    );
  }
};

export default Container;