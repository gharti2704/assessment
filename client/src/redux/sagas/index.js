import { all } from 'redux-saga/effects';
import postSaga from './postSaga';
import searchSaga from './searchSaga';

export default function* rootSaga() {
  yield all([postSaga(), searchSaga()]);
}
