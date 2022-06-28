import { FC, memo } from "react";
import { show } from "../../modeles/show";

type ShowProps = {
  show:show
};

const Show: FC<ShowProps> = ({show}) => {
  return (
    <div>
      {show.image && <img src={show.image.medium}/>}
      <h2>{show.name}</h2>
      <h3>{show.summary}</h3>
    </div>
  )
};

Show.defaultProps = {};

export default memo(Show);