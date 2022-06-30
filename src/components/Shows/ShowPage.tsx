import React, { FC,memo, useEffect } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../../Actions/shows";
import { show } from "../../../modeles/show";
import { queryStateselector, showsSelector } from "../../selectors/show";
import { State } from "../../store";
import ShowList from "./ShowList";
import { useNavigate, useSearchParams } from "react-router-dom";

type ShowPageProps = {
  query:string
  getShows:(query:string)=>void,
  shows:show[]
};

  const ShowPage: FC<ShowPageProps> = ({getShows,shows,query}) => {
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
    <div>
      <input  value={query} placeholder="hello bai log klya hall call"  onChange={handleChange}></input>
      {shows && <ShowList query={query} shows={shows}/>}
    </div>
  )
};

ShowPage.defaultProps = {};
const mapDispatchToProps={
  getShows:showsFetchAction
}
const mapStateToProps=(s:State)=>({
  shows:showsSelector(s),
  query:queryStateselector(s)
})

export default connect(mapStateToProps,mapDispatchToProps)(memo(ShowPage));