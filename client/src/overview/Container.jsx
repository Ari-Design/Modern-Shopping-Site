import React from 'react';
import Gallery from './Gallery.jsx';
import Styles from './Styles.jsx';
import ProductInfo from './ProductInfo.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.productStyles.results[0]
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
    // console.log(this.props)
    return (
      <div className="overview_container" >
        <div className="gallery_container">
          <Gallery key={this.props.productStyles.product_id}
            openFullscreen={this.props.openFullscreen}
            getCurrentImg={this.props.getCurrentImg}
            currentStyle={this.state.currentStyle}
          />
        </div>

        <section className="styles_container" >
          <Styles productStyles={this.props.productStyles.results}
            currentStyle={this.state.currentStyle}
            onClick={this.changeStyle}
            productInfo={this.props.productInfo}
          />
        </section>

        <section className="productInfo_container"><ProductInfo productInfo={this.props.productInfo}/></section>
      </div>
    );
  }
};

export default Container;