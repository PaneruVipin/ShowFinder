import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { delay, takeEvery, takeLeading } from "redux-saga/effects";
import { SHOWS_FETCH } from "../Actions/shows";
import { getShowsdSaga } from "./shows";

export const sagaMiddleware = createSagaMiddleware()
export function* rootSaga(){
     yield takeLeading(SHOWS_FETCH,getShowsdSaga)
}