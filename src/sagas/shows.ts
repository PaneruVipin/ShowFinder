
import { AnyAction } from 'redux'
import { call, delay, put} from 'redux-saga/effects'
import { showFetchedAction, showsFetchedAction } from '../Actions/shows'
import { getShow, getShows } from '../apis/show'
import { show } from '../../modeles/show'

export function* getShowsSaga(action:AnyAction):Generator{
  yield delay(500)
 if(!action.payload){
  return
 }
  const data=  yield call(getShows, action.payload)
  yield put(showsFetchedAction((data as show[]),action.payload))
}

export function* getShowSaga(action:AnyAction):Generator{
 if(!action.payload){
  return
 }
  const data=  yield call(getShow, action.payload)
  //console.log('data',data)
  yield put(showFetchedAction((data as show),action.payload))
}