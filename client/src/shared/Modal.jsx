import React from 'react';

const close = (e, onClose) => {
  e.preventDefault()

  if (onClose) {
    onClose()
  }
};

const styles = {
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'scale-down',
  }
};

const Modal = (props) => {

  if (props.fullscreen === false) {
    return null;
  }

  let modalStyle = {
    position: 'fixed',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff'
  }

  let backdropStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: '9998',
    background: 'rgba(0, 0, 0, .8)'
  }

  return (
    <div>
      <div style={modalStyle}><img style={styles.media} src={props.currentImg.url}></img></div>
      <div style={backdropStyle} onClick={e => close(e, props.onClose)} />
    </div>
  )
};

export default Modal;