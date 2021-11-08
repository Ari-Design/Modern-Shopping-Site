import React from 'react';
import moment from 'moment';


var Answer = ({answer, answers, handleHandR, productId}) => (
  <div className="answer_component">
    <div className="answer">
      {answers.indexOf(answer) === 0 ? <span className="answer_label">A:</span> : null}
      <span className="answer_body">{answer.body}</span>
    </div>
    <div className="answer_info_line">
      <div className="answer_info">
        <span className="answerer_name">by {answer.answerer_name}, &nbsp;{moment(answer.date).format("MMMM Do, YYYY")}&nbsp;&nbsp;&nbsp;</span>
        <span className="divider">|</span>
        <span
          className="answer_helpfulness"
          >&nbsp;&nbsp;&nbsp;Helpful? &nbsp;
          <span className="link_word"
            onClick={() => handleHandR(`/qa/answers/${answer.id}/helpful`, { "helpfulness": answer.helpfulness }, updateQaData(productId))}
            >Yes
          </span>
          &nbsp;{`(${answer.helpfulness})`}&nbsp;&nbsp;&nbsp;
        </span>
        <span className="divider">|</span>
        <span
          className="report_answer"
          >&nbsp;&nbsp;&nbsp;
          <span className="link_word"
            onClick={() => handleHandR(`/qa/answers/${answer.id}/report`, { "reported": true })}
            >Report
          </span>
        </span>
      </div>
    </div>
  </div>
)

export default Answer;
