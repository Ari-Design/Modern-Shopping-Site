import React from 'react';
import AnswerList from './AnswerList.jsx';

var Question = ({ allAnswers, currentQuestion, handleHandR, handleMoreAnswers, moreAnswers, openAnswerForm, productId, question, selectQuestion, updateQaData }) => (
  <div className="qa_component">
    <div className="question">
      <span className="question_label">Q:</span>
      <span className="question_body">
        {question.question_body}
      </span>
      <span className="question_options">
        <span className="question_helpfulness">
          Helpful
          <span
            className="link_word"
            onClick={() => handleHandR(`/qa/questions/${question.question_id}/helpful`, { "question_helpfulness": question.question_helpfulness }, updateQaData(productId))}
            >Yes
          </span> {`(${question.question_helpfulness})`}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="divider">|</span>
        <span className="add_answer">
          &nbsp;&nbsp;&nbsp;
          <span
            className="link_word"
            onClick={()=> {openAnswerForm('answerForm'); selectQuestion(question) }}
          >Add Answer</span>
        </span>
      </span>
    </div>
    <div>
      <AnswerList
        allAnswers={allAnswers}
        answers={question.answers}
        currentQuestion={currentQuestion}
        handleHandR={handleHandR}
        key={`ANS-${question.question_id}`}
        moreAnswers={moreAnswers}
        productId={productId}
        question={question}
        qId={question.question_id}
        updateQaData={updateQaData}
      />
    </div>
    {(allAnswers && question == currentQuestion) ?
      <h4
        className="answer_window"
        onClick={() => {selectQuestion(question); handleMoreAnswers(question)}}
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collapse Answers
      </h4> : (Object.keys(question.answers).length > 2) ?
      <h4
        className="more_answers"
        onClick={() => {selectQuestion(question); handleMoreAnswers(question)}}
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See More Answers
      </h4> : null}
  </div>

)

export default Question;