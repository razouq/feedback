import React from 'react';

const SurveyReview = ({setShowReview}) => {
  return (
    <div>
      <h1>Review</h1>
      <button onClick={() => setShowReview(false)} class="waves-effect waves-light btn">Cancel</button>
    </div>
  );
};

export default SurveyReview;