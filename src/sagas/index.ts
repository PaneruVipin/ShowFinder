
import createSagaMiddleware from "redux-saga";
import { delay, takeEvery, takeLatest} from "redux-saga/effects";
import { SHOWS_FETCH, SHOW_CAST_FETCH,  SHOW_FETCH } from "../Actions/shows";
import { getShowCastSaga, getShowSaga, getShowsSaga } from "./shows";

export const sagaMiddleware = createSagaMiddleware()
export function* rootSaga(){
     yield takeLatest(SHOWS_FETCH,getShowsSaga)
     yield takeLatest(SHOW_FETCH,getShowSaga)
     yield takeEvery(SHOW_CAST_FETCH, getShowCastSaga)
}