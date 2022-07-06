import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetail from "./components/Shows/ShowDetail";
import ShowPage from "./components/Shows/ShowPage";
import NotFoundPage from "./NotFoundPage";

type PathProps = {};

const Path: FC<PathProps> = (props) => {
  return (
    <Routes>
        <Route index element={<ShowPage/>}></Route>
        <Route  path="/show/:showId" element={<ShowDetail/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
    </Routes>
  )
};

Path.defaultProps = {};

export default memo(Path);