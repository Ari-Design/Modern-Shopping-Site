import React from 'react';
import AnswerList from './AnswerList.jsx';

var Question = ({ question, handleHandR, openAnswerForm }) => (
  <div className="qa_component">
    <div className="question">
      <span className="question_label">Q:</span>
      <span className="question_body">
        {question.question_body}
      </span>
      <span className="question_options">
        <span className="question_helpfulness">
          Helpful <a
            className="link_word"
            href ="#"
            onClick={() => handleHandR(`/qa/questions/${question.question_id}/helpful`, { "question_helpfulness": question.question_helpfulness++ })}
            >Yes</a> {`(${question.question_helpfulness})`}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="divider">|</span>
        <span onClick={openAnswerForm} className="add_answer">&nbsp;&nbsp;&nbsp;<a className="link_word">Add Answer</a></span>
      </span>
    </div>
    <div>
      <AnswerList
        key={`ANS-${question.question_id}`}
        answers={question.answers}
        handleHandR={handleHandR}
      />
    </div>
  </div>

)

export default Question;