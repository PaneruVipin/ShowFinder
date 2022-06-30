import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { delay, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { SHOWS_FETCH, SHOW_FETCH } from "../Actions/shows";
import { getShowSaga, getShowsSaga } from "./shows";

export const sagaMiddleware = createSagaMiddleware()
export function* rootSaga(){
     yield takeLeading(SHOWS_FETCH,getShowsSaga)
     yield takeLatest(SHOW_FETCH,getShowSaga)
}