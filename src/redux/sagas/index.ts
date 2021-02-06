import { put, call, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../constants/actionTypes";
import Api from "../../api";
import { Params } from "../actions";

function* fetchCategories() {
  try {
    const categories = yield call(Api.getCategories);
    // throw new Error("asd")
    yield put({ type: actionTypes.GET_CATEGORIES_SUCCESS, categories });
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAIL, error: error.message });
  }
}
function* fetchImages(action: { type: string; params: Params }) {
  try {
    const images = yield call(Api.getImages, action.params);
    yield put({ type: actionTypes.GET_IMAGES_SUCCESS, images });
  } catch (error) {
    yield put({ type: actionTypes.GET_IMAGES_FAIL, error: error.message });
  }
}

function* watchGetCategories() {
  yield takeLatest(actionTypes.GET_CATEGORIES, fetchCategories);
}

function* watchGetImages() {
  yield takeLatest(actionTypes.GET_IMAGES, fetchImages);
}

export default function* rootSaga() {
  yield all([watchGetCategories(), watchGetImages()]);
}
