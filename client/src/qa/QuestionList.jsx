import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({data}) => (
  <div>
    <ul>
      {data.results.map((question) => (
        <li className="question">
          <Question
            question={question}
          />
        </li>
      ))}
    </ul>
  </div>
)

export default QuestionList;