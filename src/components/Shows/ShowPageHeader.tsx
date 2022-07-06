import { FC, memo } from "react";
import Input from "../BasicComp/Input";

type ShowPageHeaderProps = {
    onChange:(event:any)=>void,
    value:string
};

const ShowPageHeader: FC<ShowPageHeaderProps> = ({onChange, value}) => {
  return <div className=" bg-gray-300 flex md:gap-x-8 md:pl-20 py-2 gap-x-1 px-2 items-center">
   <div className="flex flex-col md:gap-y-2  ">
    <span className="md:text-5xl text-xl">PaneruVipin</span>
    <span>CodeYogi Shows Finder</span>
    </div> 
    <Input placeholder="search movies & shows" value={value} onChange={onChange}></Input>
  </div>
};

ShowPageHeader.defaultProps = {};

export default memo(ShowPageHeader);