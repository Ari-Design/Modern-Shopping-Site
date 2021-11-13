import React from 'react';
import StyleSelector from './StyleSelector.jsx';
import Dropdown from '../shared/Dropdown.jsx';
import Star from '../shared/Star.jsx';
import ClickCounter from '../ClickCounter.jsx'


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

        {typeof salePrice === 'string' ?
          <div className="style_price_container">
            <h3 className="style_price">{price} </h3>
            <h3 className="sale_price">{salePrice}</h3>
          </div> : <h3 className="style_price_container">{price}</h3>}

        <span className="style_style">STYLE > {styleName}</span>
        <div className="style_selector">
          <StyleSelector styles={productStyles}
            onClick={this.props.onClick} />
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
        <ClickCounter event={'overview'}>
          <div className="share">
            <a className="button" id="shareBtn" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png)" }} target="_blank" rel="noopener noreferrer" href={`http://www.facebook.com/sharer.php?u=${'54.221.47.130:8080'}&p${name}=testtile`}>
            </a>
            <a className="button" id="shareBtn" style={{ backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/124/124021.png)" }}
              target="_blank" rel="noopener noreferrer" href={`http://twitter.com/share?text=${name}&url=${'54.221.47.130:8080'}`}>
            </a>
            <a id="shareBtn" style={{ backgroundImage: "url(https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Pinterest_alt.png)" }}
              target="_blank" rel="noopener noreferrer" href={`http://pinterest.com/pin/create/button/?url=${'54.221.47.130:8080'}&description=${name}`}>
            </a>
          </div>
        </ClickCounter>
      </>
    )
  }
};

export default Styles;