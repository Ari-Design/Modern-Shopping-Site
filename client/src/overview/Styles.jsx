import React from 'react';
import StyleSelector from './StyleSelector.jsx';
import Dropdown from '../shared/Dropdown.jsx';
import Star from '../shared/Star.jsx';


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
      error: false,
    };
    this.setSizeQty = this.setSizeQty.bind(this);
    this.selectedQty = this.selectedQty.bind(this);
    this.changeErrorT = this.changeErrorT.bind(this);
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
      price: currentStyle.original_price,
      salePrice: currentStyle.sale_price,
      styleName: currentStyle.name,
      skus: tempArray,
      sizes: tempArray2.length === 0 ? ['OUT OF STOCK'] : tempArray2,
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
    this.changeErrorF();
  }
  selectedQty(e) {
    this.setState({ selectedQty: e.target.value });
  }
  changeErrorT() {
    if (this.state.size === '' || this.state.size === 'SELECT SIZE') {
      this.setState({ error: true });
    }
  }
  changeErrorF() {
    this.setState({ error: false })
  }

  render() {
    var { category, price, salePrice, name, productStyles, styleName, skus, sizes, qty, size, error } = this.state;
    return (
      <>
        <div className="style_ratings">
          <Star avgRating={true} />
          <a href="#ratings_container"> Read all {this.props.reviews} reviews</a>
        </div>
        <h3 className="style_category">{category}</h3>
        <h1 className="style_name">{name}</h1>
        {typeof salePrice === 'string' ? <div className="style_price_container"><h3 style={{ textDecoration: 'line-through' }} className="style_price" >{price} </h3><h3 className="sale_price">{salePrice}</h3></div> : <h3 className="style_price_container">{price}</h3>}
        <span className="style_style">STYLE > {styleName}</span>
        <div className="style_selector">
          <StyleSelector styles={productStyles}
            onClick={this.props.onClick}
          />
        </div>
        <div className="drop_downs">
          {error ? <p style={{ margin: 0 }}>*Please select a size</p> : null}
          {sizes[0] === 'OUT OF STOCK' ? <Dropdown title={'select_size'} optionsArr={['OUT OF STOCK']} disabled={true} /> :
            <Dropdown title={'select_size'} optionsArr={['SELECT SIZE'].concat(sizes)} onChange={this.setSizeQty} />}

          {qty > 0 && qty < 15 ? <Dropdown title={'select_qty'} optionsArr={Array.from({ length: qty }, (_, i) => i + 1)} onChange={this.selectedQty} /> :
            qty !== 0 && typeof qty === 'number' ? <Dropdown title={'select_qty'} optionsArr={Array.from({ length: 15 }, (_, i) => i + 1)} onChange={this.selectedQty} /> :
              <Dropdown title={'select_qty'} optionsArr={['-']} disabled={true} />}
        </div>
        <div className="style_buttons">
          {sizes[0] === 'OUT OF STOCK' ? null : <button onClick={() => { this.changeErrorT() ? this.changeErrorT() : console.log('added') }}>add to bag button</button>}
          <button>favorite</button>
        </div>
        <div className="share">
          <button id="shareBtn" onClick={() => {
            FB.ui({
              display: 'popup',
              method: 'share',
              href: '/',
            }, function (response) { });
          }}>F</button>
          <button>
            <a className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Hello%20world">
            T</a>
          </button>
          <button>
            <a className="pintrest-share-button"
            href="https://pintrest.com/">
            P</a>
          </button>
        </div>
      </>
    )
  }
};

export default Styles;