import React from 'react';


var Answer = ({answer}) => (
  <div className="answer_component">
    <div className="answer">
      <span className="answer_label">A:</span>
      <span className="answer_body">{answer.body}</span>
    </div>
    <div className="answer_info_line">
      <div className="answer_info">
        <span className="answerer_name">by {answer.answerer_name}     </span>
        <span className="divider">|</span>
        <span className="answer_helpfulness">   Helpful?  Yes  {answer.helpfulness}    </span>
        <span className="divider">|</span>
        <span className="report_answer">    Report    </span>
      </div>
    </div>
  </div>
)

export default Answer;
