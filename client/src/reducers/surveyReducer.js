import {REVIEW_SURVEY, CLEAN_SURVEY, CREATE_SURVEY} from '../actions/types';

const initialState = {
  title: '',
  subject: '',
  body: '',
  recipients: '',
};

const surveyReducer =  (state = initialState, action) => {
  switch(action.type) {
    case REVIEW_SURVEY:
      return action.payload;

    case CLEAN_SURVEY:
      return initialState;

    case CREATE_SURVEY:
      return initialState;
      
    default:
      return state;
  }
}

export default surveyReducer;