import { FC, memo } from "react";
import { show } from "../../../modeles/show";
import Show from "./Show";

type ShowListProps = {
  shows:show[],
  query:string
};

const ShowList: FC<ShowListProps> = ({shows,query}) => {
  return (
    <div className="flex flex-wrap gap-x-1 gap-y-6 md:gap-y-12 md:justify-between justify-center">
      { shows.map((s)=><Show key={s.id} query={query} show={s}></Show>)}
      <span className="grow"></span>
    </div>
  )
};

ShowList.defaultProps = {};

export default memo(ShowList);