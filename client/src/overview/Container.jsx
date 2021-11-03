import React from 'react';
import Gallery from './Gallery.jsx';
import Styles from './Styles.jsx';
import ProductInfo from './ProductInfo.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo,
      productStyles: this.props.productStyles,
      currentStyle: this.props.productStyles.results[0]
    };
    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(obj) {
    this.setState({
      currentStyle: obj
    });
  }

  render() {
    // console.log(this.props)
    return (
      <div className="overview_container" >
        <div className="gallery_container">
          <Gallery key={this.state.productStyles.product_id}
            currentStyle={this.state.currentStyle}
          />
        </div>

        <section className="styles_container" >
          <Styles productStyles={this.state.productStyles.results}
            currentStyle={this.state.currentStyle}
            onClick={this.changeStyle}
            productInfo={this.state.productInfo}
          />
        </section>

        <section className="productInfo_container"><ProductInfo/></section>
      </div>
    );
  }
};

export default Container;