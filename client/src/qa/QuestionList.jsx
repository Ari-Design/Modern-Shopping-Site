import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ allAnswers, currentQuestion, data, handleHandR, handleMoreAnswers, moreAnswers, openAnswerForm, qListLength,
  selectQuestion, term, updateQaData }) => {
  if (data.results.length === 0) {
    return null;
  }
  if (qListLength > 2) {
    return (
    <div className="question_scroll">
      {data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness).filter((value) => {
        if (term.length < 3) {
          return value;
        } else if (value.question_body.toLowerCase().includes(term.toLowerCase())) {
          return value;
        }
      }).slice(0, qListLength).map((question) => (
        <Question
          allAnswers={allAnswers}
          currentQuestion={currentQuestion}
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
    );
  }
  return (
    <div>
      {data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness).filter((value) => {
        if (term.length < 3) {
          return value;
        } else if (value.question_body.toLowerCase().includes(term.toLowerCase())) {
          return value;
        }
      }).slice(0, qListLength).map((question) => (
        <Question
          allAnswers={allAnswers}
          currentQuestion={currentQuestion}
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
  );
}

export default QuestionList;