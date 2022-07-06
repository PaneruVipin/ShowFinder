import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showCast } from "../../../modeles/show";
import { showCastFetchAction } from "../../Actions/shows";
import { showCastSelector } from "../../selectors/show";
import { State } from "../../store";
import { withRouter, WithRouterProps } from "../../WithRouter";
import Actor from "./Actor";

type ActorListProps = {
    actors:showCast[]
}
const ActorList: FC<ActorListProps> = ({actors}) => {
   
  return (
    <div className="flex flex-wrap md:gap-x-10 gap-x-1 gap-y-4 md:gap-y-20 justify-between">
        {
     actors &&   actors.map(a=><Actor key={a.person.id} actor={a}/>)
        }
        <span className="grow"></span>
    </div>
  )
};

ActorList.defaultProps = {};



export default memo(ActorList);