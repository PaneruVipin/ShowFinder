import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { useHref, useLocation, useSearchParams } from "react-router-dom";
import { show } from "../../../modeles/show";
import { showFetchAction, showsFetchAction } from "../../Actions/shows";
import LinkWithQuery from "../../LinkWithQuery";
import { showSelector, showsSelector } from "../../selectors/show";
import { State } from "../../store";
import { withRouter, WithRouterProps } from "../../WithRouter";

type ShowDetailProps = {
    getShows:(query:string)=>void,
    getShow:(showId:number)=>void,
    show:show,
    shows:show[]
} & WithRouterProps

const ShowDetail: FC<ShowDetailProps> = ({params,getShow,shows, show,getShows}) => {
  const [searchParams] = useSearchParams();
    const urlQuery=searchParams.get('q')
    const {search} =useLocation()
    console.log(search)
   useEffect(()=>{
    if(!show && !urlQuery) {
      getShow(+params.showId)
    }else if(urlQuery && !show){
      getShows(urlQuery)
    }
   
   }, [])
      let next, prev;
     if(shows){
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
   <div>{
    show &&
    <div>
    <h2>{show.name}</h2>
    <img src={show.image?.medium}/>
    <p>{show.summary}</p>
   'download the movie this link' <a className="text-blue-500" href={show.url} target='blank'>{show.url}</a>
   <div className="flex bg-red-500 p-2 justify-between">
   {prev &&<LinkWithQuery to={'/show/'+prev}>prev</LinkWithQuery>}
   <span className="w-full"></span>
   {next &&<LinkWithQuery to={'/show/'+next}>next</LinkWithQuery>}
   </div>
   </div>
    
    }
   </div>
  )
};

ShowDetail.defaultProps = {};
const mapDispatchToProps={
    getShow:showFetchAction,
    getShows:showsFetchAction
}

const mapStateToProps=(s:State, props:any)=>{
  const showId=+props.params.showId
  return {
    show:showSelector(showId)(s),
    shows:showsSelector(s)
  }
}
export default (withRouter(connect(mapStateToProps,mapDispatchToProps)(memo(ShowDetail))));