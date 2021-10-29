import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({answers}) => (
  <ul>
    {Object.keys(answers).map((key) => (
      <li className="answer">
        <Answer
          answer={answers[key]}
        />
      </li>
    ))}
  </ul>
)

export default AnswerList;

