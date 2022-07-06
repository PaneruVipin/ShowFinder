
import { AnyAction } from 'redux'
import { call, delay, put} from 'redux-saga/effects'
import { showCastFetchedAction, showFetchedAction, showsFetchedAction } from '../Actions/shows'
import { getShow, getShowCast, getShows } from '../apis/show'
import { show, showCast } from '../../modeles/show'

export function* getShowsSaga(action:AnyAction):Generator{
  yield delay(300)
 if(!action.payload){
  return
 }
  const data=  yield call(getShows, action.payload)
  yield put(showsFetchedAction((data as show[]),action.payload))
}

export function* getShowSaga(action:AnyAction):Generator{
  const data=  yield call(getShow, action.payload)
  yield put(showFetchedAction((data as show),action.payload))
}

export function* getShowCastSaga(action:AnyAction):Generator{
   const data=  yield call(getShowCast, action.payload)
   yield put(showCastFetchedAction((data as showCast[]),action.payload))
 }