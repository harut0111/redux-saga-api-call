import { put, call, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/actionTypes";
import Api from "../../api";
import { Params } from "../actions";

function* fetchCategories() {
  try {
    const categories = yield call(Api.getCategories);
    yield put({ type: actionTypes.GET_CATEGORIES_SUCCESS, categories });
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAIL, error: error.message });
  }
}

function* fetchImages(action: { type: string; params: Params }) {
  if (action.type === actionTypes.GET_IMAGES) {
    try {
      const images = yield call(Api.getImages, action.params);
      yield put({ type: actionTypes.GET_IMAGES_SUCCESS, images });
    } catch (error) {
      yield put({ type: actionTypes.GET_IMAGES_FAIL, error: error.message });
    }
  } else {
    try {
      const images = yield call(Api.getImages, action.params);
      yield put({ type: actionTypes.GET_MORE_IMAGES_SUCCESS, images });
    } catch (error) {
      yield put({
        type: actionTypes.GET_MORE_IMAGES_FAIL,
        error: error.message,
      });
    }
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_CATEGORIES, fetchCategories);
  yield takeLatest(actionTypes.GET_IMAGES, fetchImages);
  yield takeLatest(actionTypes.GET_MORE_IMAGES, fetchImages);
}
