import { call, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/posts';

function* filterByTitle(action) {
  try {
    const posts = yield call(axios, apiUrl);
    const filteredPosts = posts.data.filter(
      (post) => post.title === action.payload
    );
    console.log(filteredPosts);
    yield put({ type: 'SEARCH_TITLE_SUCCESS', posts: filteredPosts });
  } catch (error) {
    yield put({
      type: 'SEARCH_TITLE_FAILED',
      message: 'Search result not found.',
    });
  }
}

function* searchSaga() {
  yield takeEvery('SEARCH_TITLE_REQUESTED', filterByTitle);
}

export default searchSaga;
