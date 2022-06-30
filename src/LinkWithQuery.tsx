import { FC, memo } from "react";
import { Link, useLocation } from "react-router-dom";

type LinkWithQueryProps = {
to:string,
children:any
} 

const LinkWithQuery: FC<LinkWithQueryProps> = ({to,children,...rest}) => {
    const {search} = useLocation()
  return (
    <Link to={to+ search} {...rest}>
        {children}
    </Link>
  )
};

LinkWithQuery.defaultProps = {};

export default memo(LinkWithQuery);