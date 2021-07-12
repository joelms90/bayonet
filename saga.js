import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes, failure, loadDataSuccess, loadData2Success } from './actions'


function* loadDataSaga(action) {
  
  try {
    const res = yield fetch('https://api.github.com/search/repositories?'+action.arg)
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* loadDataSaga2(action) {
  
  try {
    const res = yield fetch('https://api.github.com/repos/facebook/react/stats/commit_activity?'+action.arg)
    const data = yield res.json()
    yield put(loadData2Success(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_DATA2, loadDataSaga2),
  ])
}

export default rootSaga
