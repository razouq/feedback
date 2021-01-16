import React from 'react';
import {useSelector} from 'react-redux';

const SurveyReview = ({setShowReview}) => {
  const {title, subject, body, recipients} = useSelector(state => state.survey);
  return (
    <div>
      <h3>Review</h3>
      <h5>title:</h5>
      <p>{title}</p>
      <h5>subject</h5>
      <p>{subject}</p>
      <h5>body:</h5>
      <p>{body}</p>
      <h5>Recipients:</h5>
      <p>{recipients}</p>
      <button onClick={() => setShowReview(false)} className="waves-effect waves-light btn">Cancel</button>
    </div>
  );
};

export default SurveyReview;