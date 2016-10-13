import { combineReducers } from 'redux';
import RepoReducer from './reducer_repos';

const rootReducer = combineReducers({
  repos: RepoReducer
});

export default rootReducer;
