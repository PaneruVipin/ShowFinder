import { normalize, schema } from "normalizr"
import { Reducer } from "redux"
import { show, showCast } from "../../modeles/show"
import { SHOWS_FETCH, SHOWS_FETCHED, SHOW_CAST_FETCH, SHOW_CAST_FETCHED, SHOW_FETCH, SHOW_FETCHED } from "../Actions/shows"

 export type ShowState={
    entities:{
      [id:number]:show
    },
    query:string,
    showsAgainstQuery:{
      [query:string]:number[]
    },
    showsCast:{
        [id:number]:showCast
    }
    castAgainstShowId:{
        [id:number]:number[]
    },
    showLoading:{
      [id:number]:boolean
    },
    showsLoading:boolean,
    castLoading:{
      [id:number]:boolean
    }
}

const initialState:ShowState={
   entities:{},
   query:'',
   showsAgainstQuery:{},
   showsCast:{},
   castAgainstShowId:{},
   showLoading:{},
   showsLoading:false,
   castLoading:{}
}

export const showReducer:Reducer<ShowState> = (state=initialState,action) =>{
    
  switch (action.type) {
   case SHOWS_FETCHED:
      const {shows,query}:{shows:show[], query:string} =action.payload
      const showEntity=new schema.Entity('shows')
      const Normlized= normalize(shows, [showEntity])
      const NormlizedShows=Normlized.entities.shows
      const ids=shows.map(s=>s.id)
      return {...state,showsLoading:false, entities:{...state.entities, ...NormlizedShows}, showsAgainstQuery:{...state.showsAgainstQuery,[query]:ids}}
      case SHOWS_FETCH:
         return {...state,query:action.payload, showsLoading:true}
         case SHOW_FETCHED:
            const {show, showId}= action.payload
            return {...state,entities:{
               ...state.entities, [showId]:show
            } ,
            showLoading:{
               ...state,
               [showId]:false
            }
         }
         case SHOW_CAST_FETCHED:{
            const {showId, showCast}:{showId:number, showCast:showCast[]}=action.payload
            const NormlizedCast=showCast.reduce((a,b)=>({
                [b.person.id]:b,
                ...a
            }),{})
            const castIds=showCast.map(c=>c.person.id)
           return {
                ...state,
            showsCast:{...state.showsCast,...NormlizedCast},
            castAgainstShowId:{...state.castAgainstShowId,[showId]:castIds},
            castLoading:{
               ...state.castLoading, [showId]:false
            }
            }}
            case SHOW_FETCH:{
                   const showId=action.payload
                   return { ...state, showLoading:{
                     ...state.showLoading,
                     [showId]:true
                   }}
            }
            case SHOW_CAST_FETCH:{
               return {...state, castLoading:{
                  ...state.castLoading, [action.payload]:true
               }}
            }
   default:
      return state
  }

}