import {REVIEW_SURVEY} from '../actions/types';

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
    default:
      return state;
  }
}

export default surveyReducer;