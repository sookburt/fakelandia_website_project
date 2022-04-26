import React from "react";
import { MisdemeanourRecord } from "../data/MisdemeanourRecord";

export interface IMisdemeanourContext {
  misdemeanourList: MisdemeanourRecord[];
  misdemeanourSetter: Function;
}

const MisdemeanourContext = React.createContext<IMisdemeanourContext>(
    { misdemeanourList:[], misdemeanourSetter:Function }
    );

export default MisdemeanourContext;