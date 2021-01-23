import {combineReducers} from 'redux';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import surveysReducer from './SurveysReducer';

export default combineReducers({
  auth: authReducer,
  survey: surveyReducer,
  surveys: surveysReducer,
});