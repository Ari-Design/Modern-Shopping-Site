import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ answers }) => (
  <div>
    {Object.keys(answers).map((key) => (
      <div>
        <Answer
          key={`${key}`}
          answer={answers[key]}
        />
      </div>

    ))}
  </div>
)

export default AnswerList;

