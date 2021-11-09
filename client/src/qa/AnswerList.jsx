import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ allAnswers, answers, handleHandR, moreAnswers, productId, qId, updateQaData, }) => {
  let answersArray = [];
  for (var id in answers) {
    answersArray.push(answers[id])
  }
  if(!allAnswers) {
    return (
      <div>
        {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).slice(0,2).map((answer) => (
          <Answer
            answer={answer}
            answers={answersArray}
            handleHandR={handleHandR}
            key={answer.id}
            productId={productId}
            qId={qId}
            updateQaData={updateQaData}
          />
        ))}
      </div>
    )
  }
  return (
      <div className="answer_scroll">
        {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            answers={answersArray}
            handleHandR={handleHandR}
            productId={productId}
            updateQaData={updateQaData}
            qId={qId}
          />
        ))}
      </div>

  )
}

export default AnswerList;

