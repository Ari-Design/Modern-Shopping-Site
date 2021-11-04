import React from 'react';
import AnswerForm from './forms/AnswerForm.jsx';
import QuestionForm from './forms/QuestionForm.jsx';


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

  let fullscreenStyle = {
    position: 'fixed',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff'
  }

  let modalStyle = {
    position: 'fixed',
    height: 'fit-content',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
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

  if (props.fullscreen) {
    return (
      <div>
        <div style={fullscreenStyle}>
          <img style={styles.media} src={props.currentImg.url}></img>
        </div>
        <div style={backdropStyle} onClick={e => close(e, props.onClose.bind(this, 'fullscreen'))} />
      </div>
    );
  } else if (props.answerForm) {
    return (
      <div>
        <div style={modalStyle}>
          <AnswerForm onClick={e => close(e, props.onClose.bind(this, 'answerForm'))}/>
        </div>
        <div style={backdropStyle} onClick={e => close(e, props.onClose.bind(this, 'answerForm'))} />
      </div>
    );
  } else if (props.fullscreen) {
    return (
      <div>
        <div style={modalStyle}>
          <QuestionForm/>
        </div>
        <div style={backdropStyle} onClick={e => close(e, props.onClose)} />
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;