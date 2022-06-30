import { show } from "../../modeles/show"

export const SHOWS_FETCH='shows fetch'
export const SHOWS_FETCHED='shows fetched'
export const SHOW_FETCH='shows fetch with id'
export const SHOW_FETCHED='shows fetched with id'

export const showsFetchAction=(query:string)=>{
    return {type:SHOWS_FETCH, payload:query}
}

export const showsFetchedAction=(shows:show[],query:string)=>{
return {type:SHOWS_FETCHED, payload:{shows,query}}
}

export const showFetchAction=(showId:number)=>{
    return {type:SHOW_FETCH, payload:showId}
}

export const showFetchedAction=(show:show,showId:number)=>{
return {type:SHOW_FETCHED, payload:{show,showId}}
}

