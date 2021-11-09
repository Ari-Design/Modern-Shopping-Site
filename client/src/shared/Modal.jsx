import React from 'react';
import AnswerForm from './forms/AnswerForm.jsx';
import QuestionForm from './forms/QuestionForm.jsx';
import AddReviewForm from './forms/AddReviewForm.jsx';


const close = (e, onClose) => {
  e.preventDefault()

  if (onClose) {
    onClose()
  }
};

const Modal = (props) => {
  if (props.fullscreen) {
    return (
      <div>
        <div className='fullscreenStyle'>
          <img className='media' src={props.currentImg.url}></img>
        </div>
        <div className='backdropStyle' onClick={e => close(e, props.onClose.bind(this, 'fullscreen'))} />
      </div>
    );
  } else if (props.answerForm) {
    return (
      <div>
        <div className='modalStyle'>
          <AnswerForm
            productInfo={props.productInfo}
            currentQuestion={props.currentQuestion}
            updateQaData={props.updateQaData}
            onClick={e => close(e, props.onClose.bind(this, 'answerForm'))}/>
        </div>
        <div className='backdropStyle'/>
      </div>
    );
  } else if (props.questionForm) {
    return (
      <div>
        <div className='modalStyle'>
          <QuestionForm
            productInfo={props.productInfo}
            updateQaData={props.updateQaData}
            onClick={e => close(e, props.onClose.bind(this, 'questionForm'))}/>
        </div>
        <div className='backdropStyle'/>
      </div>
    );
  } else if (props.reviewForm) {
    return (
      <div>
        <div className='modalStyle'>
          <AddReviewForm
          productInfo={props.productInfo}
          onClick={e => close(e, props.onClose.bind(this, 'reviewForm'))}/>
        </div>
        <div className='backdropStyle'/>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;