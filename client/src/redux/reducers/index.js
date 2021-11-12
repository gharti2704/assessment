import { combineReducers } from 'redux';
import postsReducer from './posts';

const reducer = combineReducers({ postsReducer });

export default reducer;
