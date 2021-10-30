import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/posts';

function* fetchPosts() {
  try {
    const posts = yield call(axios, apiUrl);
    yield put({ type: 'GET_POSTS_SUCCESS', posts: posts.data });
  } catch (error) {
    yield put({ type: 'GET_POSTS_FAILED', message: error.ERROR });
  }
}

function* postSaga() {
  yield takeEvery('GET_POSTS_REQUESTED', fetchPosts);
}

export default postSaga;
