import { put, call, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/actionTypes";
import Api from "../../api";

function* fetchCategories() {
  try {
    const categories = yield call(Api.getCategories);
    // throw new Error("asd")
    yield put({ type: actionTypes.GET_CATEGORIES_SUCCESS, categories });
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAIL, error: error.message });
  }
}

function* watchGetCategories() {
  yield takeLatest(actionTypes.GET_CATEGORIES, fetchCategories);
}

export default function* rootSaga() {
  yield all([watchGetCategories()]);
}
