import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../types';

const apiUrl = 'http://localhost:8000/api/posts';

function* fetchPosts() {
  try {
    const posts = yield call(axios, apiUrl);
    yield put({ type: type.GET_POSTS_SUCCESS, payload: { posts: posts.data } });
  } catch (error) {
    yield put({
      type: type.GET_POSTS_FAILED,
      payload: { message: error.ERROR },
    });
  }
}

function* postSaga() {
  yield takeEvery(type.GET_POSTS_REQUESTED, fetchPosts);
}

export default postSaga;
