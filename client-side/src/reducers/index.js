import { combineReducers } from 'redux';
import postReducer from './posts';
import coinReducer from './price';

export default combineReducers({
  posts: postReducer,
  coins: coinReducer,
});
