import React from 'react';
import AnswerList from './AnswerList.jsx';

var Question = ({question}) => (
  <div className="qa_component">
    <div className="question">
      <span className="question_label">Q:</span>
      <span className="question_body">
        {question.question_body}
      </span>
      <span className="question_helpfulness">
        Helpful <a>Yes</a> {question.question_helpfulness}&nbsp&nbsp |&nbsp&nbsp <a>Add Answer</a>
      </span>
    </div>
    <div>
      <AnswerList
      answers={question.answers}
      />
    </div>
  </div>

)

export default Question;