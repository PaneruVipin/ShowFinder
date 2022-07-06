
import { State } from "../store";
import {createSelector} from 'reselect'

export const stateSelector=(s:State)=>s
export const showStateselector=createSelector(stateSelector,
     (state)=>state.shows)
export const entitiesStateSelector=createSelector(showStateselector,
     (allShows)=>allShows.entities)
export const showAgainstQueryStateselector=createSelector(showStateselector,
     (allShows)=>allShows.showsAgainstQuery)
export const queryStateselector=createSelector(showStateselector, 
    (allShows)=>allShows.query)
export const castStateSelector=createSelector(
    showStateselector,
    (showsState)=>showsState.showsCast
)
export const castLoadingStateSelector=createSelector(
    showStateselector,
    (showsState)=>showsState.castLoading
)
export const castAgainstShowIdStateSelector=createSelector(
    showStateselector,
    (showsState)=>showsState.castAgainstShowId
)
export const showLoadindStateselector=createSelector(
    showStateselector,
    (showsState)=>showsState.showLoading
)
export const showsSelector=createSelector(
    entitiesStateSelector,
    showAgainstQueryStateselector,
    queryStateselector,
    (shows, againstquerry, query)=>againstquerry[query]?.map(id=>shows[id]))

    export const showSelector =(showId:number)=>createSelector(
        entitiesStateSelector,
        (shows)=>shows[showId]
    )

export const showCastSelector=(showId:number)=>createSelector(
    castAgainstShowIdStateSelector,
    castStateSelector,
    (castIds,allCast)=>castIds[showId]?.map(id=>allCast[id])
)

export const showLoadingSelector=(showId:number)=>createSelector(
    showLoadindStateselector,
    (showLoad)=>showLoad[showId]
)

export const showsLoadingSelector=createSelector(
    showStateselector,
    (showsState)=>showsState.showsLoading
)

export const castLoadingSelector=(showId:number)=>createSelector(
castLoadingStateSelector,
(castLoad)=>castLoad[showId]
)