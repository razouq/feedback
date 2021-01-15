import {CREATE_SURVEY} from '../actions/types';

const initialState = {
  title: 'a',
  subject: '',
  body: '',
  recipients: '',
};

const surveyReducer =  (state = initialState, action) => {
  switch(action.type) {
    case CREATE_SURVEY:
      return action.payload;
    default:
      return state;
  }
}

export default surveyReducer;