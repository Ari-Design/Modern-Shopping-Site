import React from 'react';
import Answer from './Answer.jsx';

var AnswerList = ({ aListLength, answers, handleQaHelpful, handleQaReport, productId }) => {

  let answersArray = [];
  for (var id in answers) {
    answersArray.push(answers[id])
  }
  var divClass;
  aListLength > 2 ? divClass = 'answer_scroll' : divClass = 'a_list'

  return (
    <div className={divClass}>
      {answersArray.sort((a, b) => b.helpfulness - a.helpfulness).slice(0, aListLength).map((answer) => (
        <Answer
          answer={answer}
          answers={answersArray}
          handleQaHelpful={handleQaHelpful}
          handleQaReport={handleQaReport}
          key={answer.id}
          productId={productId}
        />
      ))}
    </div>
  )
}

export default AnswerList;

