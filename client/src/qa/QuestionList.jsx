import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ data, handleHandR, term, openAnswerForm, selectQuestion, qListLength, updateQaData }) => {
  if (data.results.length === 0) {
    return null;
  }
  return (<div>
    {data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness).filter((value) => {
      if (term.length < 3) {
        return value;
      } else if (value.question_body.toLowerCase().includes(term.toLowerCase())) {
        return value;
      }
    }).slice(0, qListLength).map((question) => (
      <Question
        key={`${question.question_id}`}
        productId={data.product_id}
        openAnswerForm={openAnswerForm}
        question={question}
        selectQuestion={selectQuestion}
        handleHandR={handleHandR}
        updateQaData={updateQaData}
      />
    ))}
  </div>
  );
}

export default QuestionList;