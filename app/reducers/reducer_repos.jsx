import { FETCH_SUCCESS, FETCH_ERROR } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case 'FETCH_SUCCESS':
    return [ ...action.payload.data ];
  case 'FETCH_ERROR':
    return [ action.payload ];
  }
  return state;
}
