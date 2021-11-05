import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ answers, handleHandR }) => (
  <div>
    {Object.keys(answers).map((key) => (
      <Answer
        key={`${key}`}
        answer={answers[key]}
        handleHandR={handleHandR}
      />
    ))}
  </div>
)

export default AnswerList;

