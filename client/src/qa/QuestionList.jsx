import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ data, handleHandR, term }) => (
  <div>
    {data.results.map((question) => (
      <Question
        key={`${question.question_id}`}
        question={question}
        handleHandR={handleHandR}
      />
    ))}
  </div>
)

export default QuestionList;