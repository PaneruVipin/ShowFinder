import { FC, memo } from "react";
import Input from "../BasicComp/Input";

type ShowPageHeaderProps = {
    onChange:(event:any)=>void,
    value:string
};

const ShowPageHeader: FC<ShowPageHeaderProps> = ({onChange, value}) => {
  return <div className=" bg-gray-300 flex gap-x-8 pl-20 py-2 items-center">
   <div className="flex flex-col gap-y-2">
    <span className="text-5xl">PaneruVipin</span>
    <span>CodeYogi Shows Finder</span>
    </div> 
    <Input placeholder="search movies & shows" value={value} onChange={onChange}></Input>
  </div>
};

ShowPageHeader.defaultProps = {};

export default memo(ShowPageHeader);