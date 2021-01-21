import axios from "axios";
import { FETCH_USER, CREATE_SURVEY, REVIEW_SURVEY, CLEAN_SURVEY } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
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
  const res = await axios.post('/api/surveys', survey);
  console.log(res);
  // todo: clean the survey in redux
  console.log('create a new survey, api call');
  dispatch({type: CREATE_SURVEY, payload: survey});
}

export const cleanSurvey = () => async(dispatch) => {
  dispatch({type: CLEAN_SURVEY, payload: null});
}
