import MDEditor from "@uiw/react-md-editor";
import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import {  useSearchParams } from "react-router-dom";
import { show, showCast } from "../../../modeles/show";
import {  showCastFetchAction, showFetchAction, showsFetchAction } from "../../Actions/shows";
import LinkWithQuery from "../../LinkWithQuery";
import { FcPrevious,FcNext } from 'react-icons/fc';
import Loader from "../../Loader";
import { castLoadingSelector, showCastSelector,showLoadingSelector, showSelector, showsSelector } from "../../selectors/show";
import { State } from "../../store";
import { withRouter, WithRouterProps } from "../../WithRouter";
import ActorList from "./ActorList";

type ShowDetailProps = {
    getShows:(query:string)=>void,
    getShow:(showId:number)=>void,
    show:show,
    shows:show[],
    showLoading:boolean,
    castLoading:boolean,
    showCast:showCast[],
    getShowCast:(showId:number)=>void
} & WithRouterProps

const ShowDetail: FC<ShowDetailProps> = ({getShowCast,showCast,params,getShow,shows, show,getShows,showLoading,castLoading}) => {

  const [searchParams] = useSearchParams();
    const urlQuery=searchParams.get('q')
   useEffect(()=>{
     if(urlQuery && !show){  
      getShows(urlQuery)
    }
    
   }, [])

   useEffect(()=>{
    if(urlQuery && shows){
      for (let i = 0; i < shows.length; i++) {
        const showId = shows[i].id;
      }
    }
   },[])
   useEffect(()=>{
    getShowCast(+params.showId)
    getShow(+params.showId)
   },[+params.showId])
      let next, prev;
 if(shows && show){
         for (let i = 0; i < shows.length; i++) {
          const show=shows[i]
          if(show.id===+params.showId && i<(shows.length-1)){
              const nextShow=shows[i+1]
              next=nextShow.id
          }
          if(i>=1 && show.id===+params.showId){
            const perviousShow=shows[i-1]
            prev=perviousShow.id
          } 
         }}
  return (
   <div className="bg-indigo-100 min-h-screen md:px-20 px-10 pt-6 ">
    {shows?.length>2 &&
   <div className="flex md:px-4 fixed px-0 justify-between inset-x-0 inset-y-1/2">
   {prev &&
   <LinkWithQuery to={'/show/'+prev}>
    <div className="rounded-full bg-yellow-500 md:p-6 p-3">
    <FcPrevious/>
    </div>
    </LinkWithQuery>
   }
   <span className="w-full"></span>
   {next &&
   <LinkWithQuery to={'/show/'+next}>
    <div className="rounded-full bg-yellow-500 md:p-6 p-3">
    <FcNext/>
    </div>
    </LinkWithQuery>
   }
   </div>}
    {showLoading && <Loader/>}
    {
    show &&
    <div>
      <div className="flex md:flex-row flex-col md:gap-x-10">
    <img src={show.image?.medium}/>
    <div className="space-y-2">
    <span className="text-2xl text-yellow-600">{show.name}</span>
    <MDEditor.Markdown className="bg-indigo-100" source={show.summary} />
    </div>
    </div>
     <div className="rounded-md p-2">
     <div className="font-bold mt-4">{'Cast >'}</div>
    {castLoading?<Loader></Loader>:<ActorList actors={showCast}/>}
   </div>
   </div>
    }
   </div>
  )
};

ShowDetail.defaultProps = {};
const mapDispatchToProps={
    getShow:showFetchAction,
    getShows:showsFetchAction,
    getShowCast:showCastFetchAction
}

const mapStateToProps=(s:State, props:any)=>{
  const showId=+props.params.showId
  return {
    show:showSelector(showId)(s),
    shows:showsSelector(s),
    showLoading:showLoadingSelector(showId)(s),
    castLoading:castLoadingSelector(showId)(s),
    showCast:showCastSelector(showId)(s)
  }
}
export default (withRouter(connect(mapStateToProps,mapDispatchToProps)(memo(ShowDetail))));