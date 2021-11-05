import React from 'react';
import Answer from './Answer.jsx';


var AnswerList = ({ answers, handleHandR }) => {
  let answersArray = [];
  for (var id in answers) {
    answersArray.push(answers[id])
  }
  return (
    <div>
      {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).map((answer) => (
        <Answer
          key={answer.id}
          answer={answer}
          answers={answersArray}
          handleHandR={handleHandR}
        />
      ))}
    </div>
  )

}

export default AnswerList;

