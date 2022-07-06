import { FC, memo } from "react";

type NotFoundPageProps = {};

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  return <div>
    not found page
  </div>
};

NotFoundPage.defaultProps = {};

export default memo(NotFoundPage);