import React, { FC, InputHTMLAttributes, memo, MouseEvent } from "react";
import { connect } from "react-redux";
import { showsFetchAction } from "../../Actions/shows";
import { show } from "../../modeles/show";
import { SearchResultselector } from "../../selectors/show";
import { State } from "../../store";
import ShowList from "./ShowList";

type ShowPageProps = {
  getShows:(query:string)=>void,
  shows:show[]
};

const ShowPage: FC<ShowPageProps> = ({getShows,shows}) => {
  const handleChange=(event:any) =>{
     getShows(event.target.value)
  }
  return(
    <div>
      <input placeholder="hello bai log klya hall call"  onChange={handleChange}></input>
      {shows && <ShowList shows={shows}/>}
    </div>
  )
};

ShowPage.defaultProps = {};
const mapDispatchToProps={
  getShows:showsFetchAction
}
const mapStateToProps=(s:State)=>({
  shows:SearchResultselector(s)
})

export default connect(mapStateToProps,mapDispatchToProps)(memo(ShowPage));