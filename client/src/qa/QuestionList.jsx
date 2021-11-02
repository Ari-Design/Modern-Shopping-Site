import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({data}) => (
  <div>
      {data.results.map((question) => (
        <div>
          <Question
            question={question}
          />
        </div>
      ))}
  </div>
)

export default QuestionList;