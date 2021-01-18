import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import {createSurvey} from '../../actions';

const SurveyReview = ({ setShowReview }) => {
  const survey = useSelector(
    (state) => state.survey
  );

  const { title, subject, body, recipients } = survey;

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitSurvey = () => {
    dispatch(createSurvey(survey));
    history.push('/surveys');
  }
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
      <button
        onClick={() => setShowReview(false)}
        className="waves-effect waves-light btn"
      >
        Back
      </button>
      <button
        onClick={onSubmitSurvey}
        type="submit"
        className="waves-effect waves-light btn right"
      >
        Create
      </button>
    </div>
  );
};

export default SurveyReview;
