import React from 'react';


var Answer = ({answer}) => (
  <div>
    <p>{answer.body}</p>
    <p>by {answer.answerer_name}  |  Helpful?  Yes  {answer.helpfulness}  |  Report</p>
  </div>
)

export default Answer;
