import { FETCH_SUCCESS, FETCH_ERROR } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case 'FETCH_SUCCESS':
    return { data: action.payload.data, fetched: action.fetched};
  case 'FETCH_ERROR':
    return { data: action.payload, error: action.error };
  }
  return state;
}
