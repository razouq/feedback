import {CREATE_SURVEY} from '../actions/types';

const initialState = {
  title: '',
  subject: '',
  body: '',
  recipients: '',
};

const surveyReducer =  (state = initialState, action) => {
  switch(action.type) {
    case CREATE_SURVEY:
      return action.payload || false;
    default:
      return state;
  }
}

export default surveyReducer;