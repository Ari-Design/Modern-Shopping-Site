import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ answers }) => (
  <div>
    {Object.keys(answers).map((key) => (
        <Answer
          key={`${key}`}
          answer={answers[key]}
        />
    ))}
  </div>
)

export default AnswerList;

