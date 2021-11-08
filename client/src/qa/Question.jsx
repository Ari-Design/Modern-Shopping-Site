import React from 'react';
import AnswerList from './AnswerList.jsx';

var Question = ({ question, handleHandR, openAnswerForm, selectQuestion, updateQaData, productId }) => (
  <div className="qa_component">
    <div className="question">
      <span className="question_label">Q:</span>
      <span className="question_body">
        {question.question_body}
      </span>
      <span className="question_options">
        <span className="question_helpfulness">
          Helpful
          <span
            className="link_word"
            onClick={() => handleHandR(`/qa/questions/${question.question_id}/helpful`, { "question_helpfulness": question.question_helpfulness }, updateQaData(productId))}
            >Yes
          </span> {`(${question.question_helpfulness})`}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="divider">|</span>
        <span className="add_answer">
          &nbsp;&nbsp;&nbsp;
          <span
            className="link_word"
            onClick={()=> {openAnswerForm('answerForm'); selectQuestion(question) }}
          >Add Answer</span>
        </span>
      </span>
    </div>
    <div>
      <AnswerList
        key={`ANS-${question.question_id}`}
        answers={question.answers}
        handleHandR={handleHandR}
        qId={question.question_id}
        productId={productId}
        updateQaData={updateQaData}
      />
    </div>
  </div>

)

export default Question;