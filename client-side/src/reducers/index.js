import { combineReducers } from 'redux';
import postReducer from './posts';
import priceReducer from './price'

export default combineReducers({
  posts: postReducer,
  price: priceReducer
});
