import React from 'react';
import StyleSelector from './StyleSelector.jsx';


class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      price: '',
      name: '',
      productStyles: [],
    };
  }
  componentDidMount() {
    var {productInfo, productStyles} = this.props;
    this.setState({
      category: productInfo.category,
      productStyles: productStyles
    });
  }

  render() {
    var {category, price, name, productStyles} = this.state;
    return (
      <>
      <div className="style_ratings">
        Ratings
        <span>Read all reviews</span>
      </div>
      <h3 className="style_category">{category}</h3>
      <h1 className="style_name">{name}</h1>
      <h3 className="style_price">{price}</h3>
      <div className="style_selector">
        <StyleSelector styles={productStyles}
          onClick={this.props.onClick}
        />
      </div>
      <div className="drop_downs">style drop down  qty drop down</div>
      <div className="style_buttons">
        <button>add to bag button</button>
        <button>favorite</button>
      </div>
      </>
    )
  }
};

export default Styles;