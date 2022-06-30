
import { State } from "../store";
import {createSelector} from 'reselect'

export const showStateselector=(s:State)=> s.shows
export const showAgainstQueryStateselector=(s:State)=> s.showsAgainstQuery
export const queryStateselector=(s:State)=> s.query

export const showsSelector=createSelector(
    showStateselector,
    showAgainstQueryStateselector,
    queryStateselector,
    (shows, againstquerry, query)=>againstquerry[query]?.map(id=>shows[id]))

    export const showSelector =(showId:number)=>createSelector(
        showStateselector,
        (shows)=>shows[showId]
    )