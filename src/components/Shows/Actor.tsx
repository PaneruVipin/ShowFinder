import { FC, memo } from "react";
import { showCast } from "../../../modeles/show";

type ActorProps = {
    actor:showCast
}

const Actor: FC<ActorProps> = ({actor}) => {
  return (
    <div className="flex flex-col w-32 rounded-md shadow-md p-2">
        {actor.person.image?.medium ? <img className="w-32 rounded-md" src={actor.person.image?.medium}></img> : <img className="w-32 rounded-md" src="https://www.itdp.org/wp-content/uploads/2021/06/avatar-man-icon-profile-placeholder-260nw-1229859850-e1623694994111.jpg"/>}
        <span className="font-bold ">{actor.person.name}</span>
        <span className="mt-2">{actor.character.name}</span>
    </div>
  )
};

Actor.defaultProps = {};

export default memo(Actor);