import React from 'react';
import AnswerList from './AnswerList.jsx';

var Question = ({question}) => (
  <div className="qa_component">
    <div className="question">
      <span className="question_label">Q:</span>
      <span className="question_body">
        {question.question_body}
      </span>
      <span className="question_options">
        <span className="question_helpfulness">
          Helpful <a className="link_word">Yes</a> {`(${question.question_helpfulness})`}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="divider">|</span>
        <span className="add_answer">&nbsp;&nbsp;&nbsp;<a className="link_word">Add Answer</a></span>
      </span>
    </div>
    <div>
      <AnswerList
        key={`ANS-${question.question_id}`}
        answers={question.answers}
      />
    </div>
  </div>

)

export default Question;