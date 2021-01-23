import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';
import {cleanSurvey} from '../../actions';

const SurveyNew = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanSurvey());
    }
  }, [])
  
  const [showReview, setShowReview] = useState(false); 

  return (
    <div>
      {showReview ? <SurveyReview setShowReview={setShowReview}/> : <SurveyForm setShowReview={setShowReview}/>}
    </div>
  );
}

export default SurveyNew;