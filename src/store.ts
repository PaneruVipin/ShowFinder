import { applyMiddleware, combineReducers, createStore, Reducer } from "redux"
import { rootSaga, sagaMiddleware } from "./sagas"
import { showReducer} from "./Reducers/showReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer= combineReducers({
shows:showReducer
})

export type State=ReturnType<typeof store.getState>;

export const store=createStore(
   reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)