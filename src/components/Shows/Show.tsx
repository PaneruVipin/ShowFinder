import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { show } from "../../../modeles/show";

type ShowProps = {
  show:show,
  query:string
};

const Show: FC<ShowProps> = ({show, query}) => {
  const navigate=useNavigate()
  const handleClick=()=>navigate({
    pathname:'show/'+ show.id,
    search:'?q='+query
  })
  
  return (
    <div onClick={handleClick}>
      {show.image && <img src={show.image.medium}/>}
      <h2>{show.name}</h2>
      <h3>{show.summary}</h3>
    </div>
  )
};

Show.defaultProps = {};

export default memo(Show);