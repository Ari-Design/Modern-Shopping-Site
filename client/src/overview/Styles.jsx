import React from 'react';
import StyleSelector from './StyleSelector.jsx';
import Dropdown from '../shared/Dropdown.jsx'


class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      price: '',
      name: '',
      styleName: '',
      productStyles: [],
      skus: [],
      quantities: [],
      sizes: [],
      size: '',
      qty: '',
    };
    this.setSizeQty = this.setSizeQty.bind(this);
  }
  componentDidMount() {
    this.onUpdate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentStyle !== this.props.currentStyle) {
      this.onUpdate();
    }
  }

  onUpdate() {
    var { productInfo, productStyles, currentStyle } = this.props;
    var tempArray = [];
    var tempArray2 = [];
    Object.keys(currentStyle.skus).forEach((key) => {
      currentStyle.skus[key].id = key;
      tempArray.push(currentStyle.skus[key]);
      if (currentStyle.skus[key].quantity > 0) {
        tempArray2.push(currentStyle.skus[key].size);
      }
    })
    this.setState({
      category: productInfo.category,
      name: productInfo.name,
      productStyles: productStyles,
      price: typeof currentStyle.sale_price === 'string' ? currentStyle.sale_price : currentStyle.original_price,
      styleName: currentStyle.name,
      skus: tempArray,
      sizes: tempArray2.lenght === 0 ? ['OUT OF STOCK'] : tempArray2,
    });
  }

  setSizeQty(e) {
    var tempQuantity;
    this.state.skus.forEach((item) => {
      if (item.size === e.target.value) {
        tempQuantity = item.quantity;
        return;
      }
    });
    this.setState({
      size: e.target.value,
      qty: tempQuantity,
    });
  }

  render() {
    var { category, price, name, productStyles, styleName, skus, sizes, qty} = this.state;
    return (
      <>
        <div className="style_ratings">
          Ratings
          <span>Read all reviews</span>
        </div>
        <h3 className="style_category">{category}</h3>
        <h1 className="style_name">{name}</h1>
        <h3 className="style_price">{price}</h3>
        <span className="style_style">STYLE > {styleName}</span>
        <div className="style_selector">
          <StyleSelector styles={productStyles}
            onClick={this.props.onClick}
          />
        </div>
        <div className="drop_downs">
          {sizes[0] === 'OUT OF STOCK' ? <Dropdown title={'select_size'} optionsArr={['OUT OF STOCK']} disabled={true} /> :
          <Dropdown title={'select_size'} optionsArr={['SELECT SIZE'].concat(sizes)} onChange={this.setSizeQty} />}
          {qty > 0 && qty < 15 ? <Dropdown title={'select_qty'} optionsArr={Array.from({length: qty}, (_, i) => i + 1)} onChange={this.setSizeQty} /> :
          qty !== 0 && typeof qty === 'number' ? <Dropdown title={'select_qty'} optionsArr={Array.from({length: 15}, (_, i) => i + 1)} onChange={this.setSizeQty} /> :
          <Dropdown title={'select_qty'} optionsArr={['-']} disabled={true} />}
        </div>
        <div className="style_buttons">
          <button>add to bag button</button>
          <button>favorite</button>
        </div>
      </>
    )
  }
};

export default Styles;