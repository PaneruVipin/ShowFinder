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
    <div className="w-64 rounded-md shadow-md p-4 " onClick={handleClick}>
      {show.image? <img src={show.image.medium}/>:<img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="></img>}
      <span className="text-2xl">{show.name}</span>
      <div>
      {show.name + ' is'}{show.genres.map(g=><span className="ml-2" key={g}>{g}</span>)} {show.language} film/show
      </div>
      {show.network?.country.name && <span>{`${show.network.country.name}(${show.premiered})`}</span>}
    </div>
  )
};

Show.defaultProps = {};

export default memo(Show);