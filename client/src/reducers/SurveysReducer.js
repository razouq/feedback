import _ from 'lodash';
import {FETCH_SURVEYS} from '../actions/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_SURVEYS:
      return {...state, ..._.mapKeys(action.payload, '_id')};
    default:
      return state;
  }
}