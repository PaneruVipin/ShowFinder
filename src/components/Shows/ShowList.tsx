import { FC, memo } from "react";
import { show } from "../../modeles/show";
import Show from "./Show";

type ShowListProps = {
  shows:show[]
};

const ShowList: FC<ShowListProps> = ({shows}) => {
  return (
    <div>
      { shows.map((s)=><Show key={s.id} show={s}></Show>)}
    </div>
  )
};

ShowList.defaultProps = {};

export default memo(ShowList);