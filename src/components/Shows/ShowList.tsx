import { FC, memo } from "react";
import { show } from "../../../modeles/show";
import Show from "./Show";

type ShowListProps = {
  shows:show[],
  query:string
};

const ShowList: FC<ShowListProps> = ({shows,query}) => {
  return (
    <div>
      { shows.map((s)=><Show key={s.id} query={query} show={s}></Show>)}
    </div>
  )
};

ShowList.defaultProps = {};

export default memo(ShowList);