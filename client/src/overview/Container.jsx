import React from 'react';
import Gallery from './Gallery.jsx';
import Styles from './Styles.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo,
      productStyles: this.props.productStyles,
      currentStyle: this.props.productStyles.results[0]
    };
  }
  // productInfo={this.state.productInfo}
  // productStyles={this.state.productStyles.results}
  render() {

    return (
      <div className="overview_container" >
        <div className="gallery_container">
          <Gallery key={this.state.productStyles.product_id}
            currentStyle={this.state.currentStyle}
          />
        </div>
        <section className="styles_container" ><Styles/></section>
        <section className="productInfo_container"></section>
      </div>
    );
  }
};

export default Container;