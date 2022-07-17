import { FC, memo } from "react";
import Input from "../BasicComp/Input";

type ShowPageHeaderProps = {
    onChange:(event:any)=>void,
    value:string
};

const ShowPageHeader: FC<ShowPageHeaderProps> = ({onChange, value}) => {
  return <div className="bg-gray-300">
  <div className="  flex md:gap-x-8 md:pl-20 py-2 gap-x-4 px-2 items-center">
     <div className="flex flex-col gap-y-2 ">
    <span className="md:text-5xl text-xl">PaneruVipin</span>
    <span className="hidden md:block">CodeYogi Shows Finder</span>
    </div> 
    <Input placeholder="search movies & shows" value={value} onChange={onChange}></Input>
  </div>
    <span className="md:hidden ml-20">CodeYogi Shows Finder</span>
  </div>
};

ShowPageHeader.defaultProps = {};

export default memo(ShowPageHeader);