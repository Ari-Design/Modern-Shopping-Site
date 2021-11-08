import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ answers, handleHandR, qId, productId }) => {
  let answersArray = [];
  for (var id in answers) {
    answersArray.push(answers[id])
  }
  return (
    <div>
      {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).slice(0,2).map((answer) => (
        <Answer
          key={answer.id}
          answer={answer}
          answers={answersArray}
          handleHandR={handleHandR}
          productId={productId}
          qId={qId}
        />
      ))}
    </div>
  )

}

export default AnswerList;

