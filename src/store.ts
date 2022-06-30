import { normalize, schema } from "normalizr"
import { applyMiddleware, createStore, Reducer } from "redux"
import { SHOWS_FETCH, SHOWS_FETCHED, SHOW_FETCHED } from "./Actions/shows"
import { show } from "../modeles/show"
import { rootSaga, sagaMiddleware } from "./sagas"

export type State={
    shows:{
      [id:number]:show
    },
    query:string,
    showsAgainstQuery:{
      [query:string]:number[]
    }
}

const initialState:State={
   shows:{},
   query:'',
   showsAgainstQuery:{},
}

const reducer:Reducer<State> = (state=initialState,action) =>{
  switch (action.type) {
   case SHOWS_FETCHED:
      const {shows,query}:{shows:show[], query:string} =action.payload
      const showEntity=new schema.Entity('shows')
      const Normlized= normalize(shows, [showEntity])
      const NormlizedShows=Normlized.entities.shows
      const ids=shows.map(s=>s.id)
      return {...state, shows:{...state.shows, ...NormlizedShows}, showsAgainstQuery:{...state.showsAgainstQuery,[query]:ids}}
      case SHOWS_FETCH:
         return {...state,query:action.payload}
         case SHOW_FETCHED:
            const {show, showId}= action.payload
            return {...state,shows:{
               ...state.shows, [showId]:show
            } 
         }
   default:
      return state
  }

}

export const store=createStore(
   reducer,
   applyMiddleware(sagaMiddleware)
   )
   sagaMiddleware.run(rootSaga)