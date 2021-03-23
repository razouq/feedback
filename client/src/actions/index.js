import axios from "axios";
import { FETCH_USER, CREATE_SURVEY, REVIEW_SURVEY, CLEAN_SURVEY, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  console.log(token);
  const res = await axios.post('/api/stripe', token);

  dispatch({type: FETCH_USER, payload: res.data});
};

export const reviewSurvey = (survey) => async (dispatch) => {
  // const res = await axios.post('/api/survey/new', survey);
  dispatch({type: REVIEW_SURVEY, payload: survey});
}

export const createSurvey = (survey) => async (dispatch) => {
  // todo: send the request to create a new survey
  console.log(survey);
  const response = await axios.post('/api/surveys', survey);
  console.log(response);
  // todo: clean the survey in redux
  console.log('create a new survey, api call');
  dispatch({type: CREATE_SURVEY, payload: survey});
}

export const cleanSurvey = () => async(dispatch) => {
  dispatch({type: CLEAN_SURVEY, payload: null});
}

export const fetchSurveys = () => async(dispatch) => {

  const response = await axios.get('/api/surveys');
  console.log(response.data);

  dispatch({type: FETCH_SURVEYS, payload: response.data});
}
