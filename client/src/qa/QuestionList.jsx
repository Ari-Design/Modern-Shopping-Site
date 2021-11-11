import React from 'react';
import Question from './Question.jsx';

var QuestionList = ({ allAnswers, currentQuestion, data, handleQaHelpful, handleQaReport, handleMoreAnswers, moreAnswers, openAnswerForm, qListLength, selectQuestion, term, updateQaData }) => {

  if (data.results.length === 0) {
    return null;
  }
  let divClass;
  qListLength > 2 ? divClass = 'question_scroll' : divClass = 'q_list'

  return (
    <div className={divClass}>
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
          handleQaHelpful={handleQaHelpful}
          handleQaReport={handleQaReport}
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