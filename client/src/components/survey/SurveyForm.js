import React from 'react';

const SurveyForm = ({setShowReview}) => {
  return (
    <div>
      <h1>form</h1>
      <button onClick={() => setShowReview(true)} class="waves-effect waves-light btn">Next</button>
    </div>
    
  );
};

export default SurveyForm;