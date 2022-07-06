import { FC, memo } from "react";
import './loader.css'

type LoaderProps = {};

const Loader: FC<LoaderProps> = (props) => {
  return <div className="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
};

Loader.defaultProps = {};

export default memo(Loader);