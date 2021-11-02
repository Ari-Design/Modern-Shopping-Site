import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ data }) => (
  <div>
    {data.results.map((question) => (
      <Question key={question.question_id}
        question={question}
      />
    ))}
  </div>
)

export default QuestionList;