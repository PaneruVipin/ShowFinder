import React, { FC,memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../../Actions/shows";
import { show } from "../../../modeles/show";
import { queryStateselector, showsLoadingSelector, showsSelector } from "../../selectors/show";
import { State } from "../../store";
import ShowList from "./ShowList";
import { useNavigate, useSearchParams } from "react-router-dom";
import ShowPageHeader from "./ShowPageHeader";
import Loader from "../../Loader";

type ShowPageProps = {
  query:string
  getShows:(query:string)=>void,
  shows:show[],
  showsLoading:boolean
};

  const ShowPage: FC<ShowPageProps> = ({getShows,shows,query,showsLoading}) => {
  const navigate=useNavigate()
  const [searchParams] = useSearchParams();
  const searchQuery=searchParams.get('q')
  const handleChange=(event:any) =>{
     getShows(event.target.value)
     navigate({
       search:'?q='+event.target.value
     })
     
  }
  useEffect(()=>{
    if(searchQuery && !shows ){
      getShows(searchQuery)
     }
  })
  
  return(
    
      <div className='bg-green-300 min-h-screen'>
      <ShowPageHeader onChange={handleChange} value={query}/>
      {showsLoading?<Loader/>:<div className="md:pt-10 pt-6 md:px-6 px-4">
      {shows && <ShowList query={query} shows={shows}/>}
      </div>}
    </div>
  )
};

ShowPage.defaultProps = {};
const mapDispatchToProps={
  getShows:showsFetchAction
}
const mapStateToProps=(s:State)=>({
  shows:showsSelector(s),
  query:queryStateselector(s),
  showsLoading:showsLoadingSelector(s)
})

export default connect(mapStateToProps,mapDispatchToProps)(memo(ShowPage));