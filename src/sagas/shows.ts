
import { AnyAction } from 'redux'
import { call, delay, put} from 'redux-saga/effects'
import { showsFetchedAction } from '../Actions/shows'
import { getShows } from '../apis/show'
import { show } from '../modeles/show'

export function* getShowsdSaga(action:AnyAction):Generator{
  yield delay(300)
 if(!action.payload){
  return
 }
  const data=  yield call(getShows, action.payload)
  yield put(showsFetchedAction((data as show[]),action.payload))
}