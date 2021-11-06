import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ data, handleHandR, term, openAnswerForm, selectQuestion}) => (
  <div>
    {data.results.sort((a, b) =>b.question_helpfulness - a.question_helpfulness).filter((value) => {
      if (term.length < 3) {
        return value;
      } else if (value.question_body.toLowerCase().includes(term.toLowerCase())){
        return value;
      }
    }).map((question) => (
      <Question
        key={`${question.question_id}`}
        openAnswerForm={openAnswerForm}
        question={question}
        selectQuestion={selectQuestion}
        handleHandR={handleHandR}
      />
    ))}
  </div>
)

export default QuestionList;