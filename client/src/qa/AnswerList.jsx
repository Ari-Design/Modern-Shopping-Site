import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ allAnswers, answers, ansExpand, currentQuestion, handleQaHelpful, handleQaReport, moreAnswers, productId, question, qId, updateQaData, }) => {

  let answersArray = [];
  for (var id in answers) {
    answersArray.push(answers[id])
  }

  if(ansExpand) {
    return (
      <div className="answer_scroll">
        {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).map((answer) => (
          <Answer
          key={answer.id}
          answer={answer}
          answers={answersArray}
          ansExpand={ansExpand}
          handleQaHelpful={handleQaHelpful}
          handleQaReport={handleQaReport}
          productId={productId}
          updateQaData={updateQaData}
          qId={qId}
          />
          ))}
      </div>
      )
  }
  return (
    <div>
      {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).slice(0,2).map((answer) => (
        <Answer
          answer={answer}
          answers={answersArray}
          ansExpand={ansExpand}
          handleQaHelpful={handleQaHelpful}
          handleQaReport={handleQaReport}
          key={answer.id}
          productId={productId}
          qId={qId}
          updateQaData={updateQaData}
        />
      ))}
    </div>
  )
}

export default AnswerList;

