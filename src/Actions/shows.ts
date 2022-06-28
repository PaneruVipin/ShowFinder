import { show } from "../modeles/show"

export const SHOWS_FETCH='shows fetch'
export const SHOWS_FETCHED='shows fetched'

export const showsFetchAction=(query:string)=>{
    return {type:SHOWS_FETCH, payload:query}
}

export const showsFetchedAction=(shows:show[],query:string)=>{
return {type:SHOWS_FETCHED, payload:{shows,query}}
}