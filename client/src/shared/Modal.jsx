import React from 'react';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ isOpen: false })
  }

  render() {
    if (this.state.isOpen === false) {
      return null;
    }

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <div>
        <div style={modalStyle}>{this.props.children}</div>
        <div style={backdropStyle} onClick={this.close} />
      </div>
    )
  }
};

export default Modal;