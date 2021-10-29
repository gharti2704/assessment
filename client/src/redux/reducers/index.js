import { combineReducers } from 'redux';
import postReducer from './postReducer';

const reducer = combineReducers({
  postReducer: postReducer,
});

export default reducer;
