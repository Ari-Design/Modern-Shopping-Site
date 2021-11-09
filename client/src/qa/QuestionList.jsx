import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ allAnswers, data, handleHandR, handleMoreAnswers, moreAnswers, openAnswerForm, qListLength,
  selectQuestion, term, updateQaData, }) => (

  <div>
    {data.results.sort((a, b) =>b.question_helpfulness - a.question_helpfulness).filter((value) => {
      if (term.length < 3) {
        return value;
      } else if (value.question_body.toLowerCase().includes(term.toLowerCase())){
        return value;
      }
    }).slice(0, qListLength).map((question) => (
      <Question
        allAnswers={allAnswers}
        handleHandR={handleHandR}
        handleMoreAnswers={handleMoreAnswers}
        key={`${question.question_id}`}
        moreAnswers={moreAnswers}
        openAnswerForm={openAnswerForm}
        productId={data.product_id}
        question={question}
        selectQuestion={selectQuestion}
        updateQaData={updateQaData}
      />
    ))}
  </div>
)

export default QuestionList;