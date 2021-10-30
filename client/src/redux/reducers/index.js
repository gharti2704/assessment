import { combineReducers } from 'redux';
import posts from './posts';
// import search from './search';

const reducer = combineReducers({
  posts: posts,
});

export default reducer;
