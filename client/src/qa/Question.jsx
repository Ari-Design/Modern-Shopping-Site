import React from 'react';
import AnswerList from './AnswerList.jsx';

var Question = ({question}) => (
  <ul>
    <li>
      <span>
        <h3>{question.question_body}</h3>
      </span>
      <span>
        Helpful Yes {question.question_helpfulness} | Add Answer
      </span>
      <div>
        <AnswerList
        answers={question.answers}
        />
      </div>
    </li>
  </ul>
)

export default Question;